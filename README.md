# HMAC-SHA256 Hash Operation for Directus Flows


This extension provides a simple and secure operation for Directus Flows to generate an HMAC-SHA256 hash from an input string and a secret key. It's perfect for creating signatures for API requests, verifying webhooks, or any other task requiring a keyed hash.

## ✨ Screenshot

Here is what the operation looks like in the Directus Flow builder:
![alt text](https://raw.githubusercontent.com/kamilnader/directus-extension-hmac-sha256-hash/main/operation-preview.jpeg)
    

## 📦 Installation

In your Directus project root, run the following command:

```bash
npm install directus-extension-hmac-sha256-hash
```

or from Directus Marketplace

After installation, restart your Directus instance to see the new operation available in the Flow builder.

## 🚀 How to Use

1.  In the Directus App, navigate to **Settings** > **Flows**.
2.  Create a new Flow or select an existing one.
3.  Click the `+` icon to add a new operation.
4.  Under "Operations", search for and select **HMAC-SHA256 Hash**.
5.  Configure the operation's options.

## ⚙️ Configuration Options

The operation has two simple and required fields:

*   **Input String**: The data you want to hash. This can be a static value or dynamic data from a previous operation or trigger using Directus variables (e.g., `{{$trigger.body.id}}`).
*   **HMAC Key**: Your secret key for the HMAC function. For best security, use an environment variable to store your key (e.g., `{{$env.HMAC_SECRET_KEY}}`). The input for this field is masked for security.

## 💡 Example

This operation takes the input string and key and returns the calculated hexadecimal hash as a string. You can then use this result in subsequent Flow operations.

#### **Input:**

*   **Input String**: `ce2f5514-282a-477a-88e6-67185bf719c7`
*   **HMAC Key**: `0d1e6eaf53ff45e4ac2d891bc2426e5b`

#### **Output:**

The operation will return the following string, which can be accessed using the operation's key (e.g., if you named the operation key `create_hash`, you can access it with `{{create_hash}}`)