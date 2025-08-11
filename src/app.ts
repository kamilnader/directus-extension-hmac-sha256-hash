import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "hmac-sha256",
  name: "HMAC-SHA256 Hash",
  icon: "key",
  description: "Hashes a string using HMAC-SHA256 algorithm.",

  overview: ({ input }) => [
    {
      label: "Input String",
      text: input || "Not provided",
    },
    {
      label: "Algorithm",
      text: "HMAC-SHA256",
    },
  ],

  options: [
    {
      field: "input",
      name: "Input String",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
        required: true,
        options: {
          placeholder: "ce2f0514-282a-477a-88e6-67185bf719c7",
        },
      },
    },
    {
      field: "hmacKey",
      name: "HMAC Key",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
        required: true,
        options: {
          placeholder: "Your secret HMAC key",
          masked: true,
        },
      },
    },
  ],
});