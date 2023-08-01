import { type NextApiRequest, type NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { priceId } = req.body;
    console.log("REQUEST BODY::", priceId);

    try {
      const checkoutSession: Stripe.Response<Stripe.Checkout.Session> =
        await stripe.checkout.sessions.create({
          mode: "subscription",
          line_items: [
            {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              price: priceId,
              // For metered billing, do not pass quantity
              quantity: 1,
            },
          ],
          // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
          // the actual Session ID is returned in the query parameter when your customer
          // is redirected to the success page.
          success_url: `${process.env.WEB_URL}?session_id={CHECKOUT_SESSION_ID}`, // add success.html
          cancel_url: `${process.env.WEB_URL}/pricing?cancelled=true`, // handle cancelled session
        });
      console.log("CHECKOUT SESSION::", checkoutSession);
      res.status(200).json(checkoutSession);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
