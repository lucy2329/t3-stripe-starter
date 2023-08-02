# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, you can join the t3.gg [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-stripe-starter GitHub repository](https://github.com/lucy2329/t3-stripe-starter) for more information!

## What does this repo give you?

t3-stripe-starter is a powerful boilerplate for building Software as a Service (SaaS) applications on top of the t3 stack. It provides a fully functional SaaS template with essential features, including Google Sign-in powered by NextAuth, subscription management handled by Stripe, and a Stripe webhook to capture and process subscription events.

## Features

SaaS Starter: Get started quickly with a professionally designed Landing and Pricing page template, fully customizable to suit your specific branding and content needs. Check out the live demo [here](https://t3-stripe-starter.vercel.app/).

NextAuth - Google Sign-in: Implement secure user authentication using NextAuth, with support for Google Sign-in. This enables your users to log in to your SaaS application effortlessly using their Google accounts.

Stripe Integration: Easily manage subscriptions and payments with the seamless integration of Stripe. Handle recurring payments, billing, and invoicing with Stripe's powerful and secure payment processing infrastructure.

Stripe Webhook: Keep your subscription data in sync and handle critical subscription events by utilizing the Stripe webhook. Be notified of important events like successful payments, subscription cancellations, and more.

## Installation and Setup

To get started with t3-stripe-starter, follow these simple steps:

Clone this repository to your local machine.
`git clone https://github.com/lucy2329/t3-stripe-starter.git`

Set up your Stripe account and obtain the necessary API keys as mentioned in the `.env.example` file. You will also find info on where to find these keys there.
Configure the environment variables for Stripe and NextAuth (Google sign in) in the project.
Install dependencies by running npm install.
Launch the application locally using npm run dev.
Start by cloning this repository
`git clone https://github.com/lucy2329/t3-stripe-starter.git`
You can go ahead and initialize the git repository and push it to your own account

## How do I deploy this?

This can be easily deployed using Vercel. Checkout their docs [here](https://vercel.com/docs) on how to deploy it for free.
