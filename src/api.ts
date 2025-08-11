import { defineOperationApi } from "@directus/extensions-sdk";
import crypto from "crypto";

interface OperationOptions {
  input: string;
  hmacKey: string;
}

export default defineOperationApi<OperationOptions>({
  id: "hmac-sha256",
  handler: ({ input, hmacKey }) => {
    if (!input) {
      throw new Error("Input String is required.");
    }
    if (!hmacKey) {
      throw new Error("HMAC Key is required.");
    }

    try {
      // Create an HMAC object using the SHA256 algorithm and the provided key.
      const hmac = crypto.createHmac("sha256", hmacKey);

      // Update the HMAC object with the input string, specifying UTF-8 encoding.
      hmac.update(input, "utf8");

      // Calculate the digest in hexadecimal format and return it.
      const hash = hmac.digest("hex");

      return hash;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`HMAC-SHA256 hashing failed: ${message}`);
    }
  },
});