## Linkly: URL Shortener

Linkly is a user-friendly URL shortening application built with Next.js, offering a streamlined experience for simplifying long links. It features a responsive design, dark mode toggle, and convenient QR code generation for each shortened URL. Links are stored in the browser's local storage for persistence between sessions.

## Features
URL Shortening: Shorten long URLs to concise, shareable links.
Dark Mode: Toggle between light and dark themes for personalized viewing.
QR Code Generation: Create QR codes for instant access to shortened links.
Local Storage: Persist shortened URLs in local storage for retrieval across sessions.
Copy to Clipboard: Easily copy shortened URLs with one click.
Responsive Design: Adapts seamlessly to various screen sizes for optimal viewing.
Error Handling: Provides informative messages for invalid URLs or shortening errors.

## Technologies Used
Next.js
React
TypeScript
TinyURL API
React Icons
React Spinners
React Toastify
React QR Code
React-use

## Installation and Setup
Clone the repository: git clone <https://github.com/Paul-Chukwuemeka/url-shortner.git>
Navigate to the project directory: cd url-shortner
Install dependencies: npm install

Create a .env.local file in the root directory: Add your TinyURL API key as NEXT_PUBLIC_TINY_URL=<your_api_key>.
Run the development server: npm run dev
## Usage
Enter the long URL you want to shorten in the input field.
Click the "Shorten URL" button.
The shortened URL, along with a QR code, will be displayed.
Click the copy icon to copy the shortened URL to your clipboard.
Shortened URLs are saved locally and displayed below the input field.

## Future Enhancements
Custom Short Links: Allow users to customize the shortened URL slug.
Analytics: Track click-through rates and other statistics for shortened links.
User Authentication: Implement user accounts to manage and organize shortened URLs.
Integration with other services: Connect with social media platforms for easy sharing.
Contributing
Contributions are welcome! Please feel free to submit issues and pull requests.