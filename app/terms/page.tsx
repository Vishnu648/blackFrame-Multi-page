import React from "react";

export default function page() {
  return (
    <div className="flex flex-col bg-[#e9ecef] p-6 lg:p-10 w-full">
      <h1 style={{ fontFamily: "myCustomFont" }} className="text-5xl">
        Terms and conditions
      </h1>
      <p
            style={{ fontFamily: "myIphoneFont", lineHeight: "20px" }}
            className="text-lg w-full md:w-[50vw]"
      >
        Before asking us to carry out work on your behalf, please read these
        terms and conditions carefully; asking us to carry out work for you
        confirms your explicit acceptance of these terms and conditions. If
        there is any part of these terms and conditions, our service or any
        aspects of our business that you do not agree with, your sole remedy is
        to discontinue using our services.
      </p>
      <div
        style={{ fontFamily: "myIphoneFont", lineHeight: "20px" }}
        className="text-lg w-full md:w-[50vw]"
      >
        <h2 className="text-xl font-semibold">What you can expect from us:</h2>
        <ul className="list-disc">
          <li>
            We will complete your work to the deadline we've agreed with you.
          </li>
          <li>
            We will follow any special instructions you provide to us through
            the quote form or via email.
          </li>
          <li>
            We will treat you and your work with professionalism, courtesy,
            honesty, and integrity at all times.
          </li>
          <li> We will meet all of our commitments to you.</li>
        </ul>
      </div>

      <div
        style={{ fontFamily: "myIphoneFont", lineHeight: "20px" }}
        className="text-lg w-full md:w-[50vw]"
      >
        <h2 className="text-xl font-semibold">What we need from you:</h2>
        <p>
          Please let us know of any special instructions prior to us starting
          the work, including:
        </p>
        <ul className="list-disc">
          <li> Your deadlines.</li>
          <li> Preferred formatting or styles.</li>
          <li>Any special requirements.</li>
          <li>
            Please submit your work to us by the timeline we have agreed with
            you; we may not be able to edit work that is submitted late, or we
            may need to alter the deadline or price
          </li>
          <li>
            Please only submit completed work to which you don't expect to make
            any further changes; if you make changes and need us to edit them,
            we may need to make an additional charge.
          </li>
          <li>
            Please make payment to the terms agreed; if we've asked you to pay
            up front, we will start work once we have received your payment; if
            we have asked you to pay a portion of the cost up front, you agree
            to pay the balance due on the invoice prior to us returning the
            work.
          </li>
          <li>
            
            If you have questions about any aspects of your work or what we can
            do for you, please ask.
          </li>
        </ul>
      </div>

      <div style={{ fontFamily: "myIphoneFont", lineHeight: "20px" }}
        className="text-lg w-full md:w-[50vw]">
        <h2 className="text-xl font-semibold">Payment and prices</h2>
        <ul className="list-disc">
          <li>
            Our prices do vary from time to time, and for limited periods we may
            offer additional discounts on our rates for new or existing clients;
            the price we quote is based on our current pricing at that moment
            and is the price you agree to pay to us to edit your work.
          </li>
          <li>
            Our fee for editing your work will be as stated to you from us.
          </li>
          <li>
            We will endeavor to meet the prices shown on our website quote from.
            In some unsuual circumstances, we may need to charge more than the
            amount shown. We will always confirm the final price to you and will
            only start work once we have your agreement.
          </li>
          <li>
            Quotes are valid for a period of seven days after you receive them
            via our website or in a separate email from us.
          </li>
          <li>
            The price quoted for services also includes editorial support,
            advice, and aftercare.
          </li>
          <li>
            We do have minimum prices for carrying out work; we may alter or
            waive this fee, at our discretion.
          </li>
          <li>
            If the number of words we edit or the timescale differs from those
            stated in your quote, we will adjust our fee accordingly.
          </li>
          <li>
            Once you have agreed that we can carry out work on your behalf, you
            explicitly enter into an agreement with Freelance Editorial
            Services. This means we will carry out services for you as listed on
            this site and in these terms and that you will pay the full amount
            agreed with us
          </li>
          <li>
            For late payment, we may levy additional interest charges and fees,
            at our discretion.
          </li>
        </ul>
      </div>

      <div style={{ fontFamily: "myIphoneFont", lineHeight: "20px" }}
        className="text-lg w-full md:w-[50vw]">
        <h2 className="text-xl font-semibold">
          Modifications of terms and conditions:
        </h2>
        <ul className="list-disc">
          <li>
            These terms and conditions may be modified, amended, reorganized,
            rewritten, or revoked at any time, for any reason and without
            notice.
          </li>
          <li>
            Please ensure that you review our website and agree to the latest
            terms and conditions before asking us to complete work on your
            behalf.
          </li>
        </ul>
      </div>
    </div>
  );
}
