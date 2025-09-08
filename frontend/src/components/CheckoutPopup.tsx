"use client";
import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useAppSelector } from "../app/hooks/redux-hooks";
import API from "../api/api";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

// Checkout schema created by yup
const checkoutSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is Required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(10, "Phone number must be 10 digits or more"),
  region: yup.string().required("A region is required"),
  address: yup.string().required("An address is required"),
});

export function CheckoutPopup({
  openModal,
  setOpenModal,
  total,
  deliveryFee,
  setDeliveryFee,
}: {
  openModal: boolean;
  setOpenModal: (arg: boolean) => void;
  total: string | number | undefined | null;
  deliveryFee: number; // Add deliveryFee prop type
  setDeliveryFee: React.Dispatch<React.SetStateAction<number>>; // Add setDeliveryFee prop type
}) {
  const { cart } = useAppSelector((state) => state.app);

  // Calculate total including delivery fee
  const tAmount = cart.reduce(
    (a, t) => a + Number(t.price) * (t.quantity || 1),
    0
  );
  const finalTotal = tAmount + deliveryFee;

  function onCloseModal() {
    setOpenModal(false);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      region: "",
      address: "",
    },
    validationSchema: checkoutSchema,
    onSubmit: async (values) => {
      try {
        // Checkout logic (API call)
        console.log({ ...values, cart });
        await API.post("/product/checkout", {
          ...values,
          cart,
          amount: finalTotal, // Include delivery fee in the total amount
        });
        toast.success("Checkout successful!");

        // Sending an email using EmailJS
        const templateParams = {
          to_name: values.email.split("@")[0], // Extracting username from email
          items: cart.map((item) => item.name).join(", "), // List of purchased items
          amount: `Ksh. ${finalTotal}`, // Total amount including delivery fee
          address: values.address, // Shipping address
        };

        await emailjs.send(
          "service_vcth7pg", // Replace with your EmailJS service ID
          "template_fony918", // Replace with your EmailJS template ID
          templateParams,
          "2R-u-bLug_-Z3RFXh" // Replace with your EmailJS public key
        );

        toast.success("Email notification sent!");
        setOpenModal(false);
      } catch (error) {
        console.error(error);
        toast.error("Error processing checkout or sending email.");
      }
    },
  });

  return (
    <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Add details to Checkout
          </h3>

          {/* Email Input */}
          <div>
            <Label htmlFor="email" value="Email Address" />
            <TextInput
              id="email"
              type="text"
              placeholder="Enter Email Address"
              {...formik.getFieldProps("email")}
              color={
                formik.touched.email && formik.errors.email
                  ? "failure"
                  : undefined
              }
              helperText={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""
              }
            />
          </div>

          {/* Phone Input */}
          <div>
            <Label htmlFor="phone" value="Phone Number" />
            <TextInput
              id="phone"
              type="text"
              placeholder="Enter Phone Number"
              {...formik.getFieldProps("phone")}
              color={
                formik.touched.phone && formik.errors.phone
                  ? "failure"
                  : undefined
              }
              helperText={
                formik.touched.phone && formik.errors.phone
                  ? formik.errors.phone
                  : ""
              }
            />
          </div>

          {/* Region Input */}
          <div>
            <Label htmlFor="region" value="Region" />
            <TextInput
              id="region"
              type="text"
              placeholder="Enter Region"
              {...formik.getFieldProps("region")}
              color={
                formik.touched.region && formik.errors.region
                  ? "failure"
                  : undefined
              }
              helperText={
                formik.touched.region && formik.errors.region
                  ? formik.errors.region
                  : ""
              }
            />
          </div>

          {/* Address Input */}
          <div>
            <Label htmlFor="address" value="Street Address" />
            <TextInput
              id="address"
              type="text"
              placeholder="Street Address"
              {...formik.getFieldProps("address")}
              color={
                formik.touched.address && formik.errors.address
                  ? "failure"
                  : undefined
              }
              helperText={
                formik.touched.address && formik.errors.address
                  ? formik.errors.address
                  : ""
              }
            />
          </div>

          {/* Delivery Fee Input */}
          <div>
            <Label htmlFor="deliveryFee" value="Delivery Fee (Ksh)" />
            <TextInput
              id="deliveryFee"
              type="number"
              placeholder="Enter Delivery Fee"
              value={deliveryFee}
              onChange={(e) => setDeliveryFee(Number(e.target.value) || 0)}
            />
          </div>

          {/* Final Total */}
          <h3 className="text-lg font-bold">
            Final Total: Ksh. {finalTotal.toLocaleString()}
          </h3>

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Save for later</Label>
            </div>
          </div>

          <Button
            disabled={formik.isSubmitting}
            isProcessing={formik.isSubmitting}
            type="submit"
            className="w-full"
          >
            Checkout & Pay (Ksh. {finalTotal.toLocaleString()})
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
