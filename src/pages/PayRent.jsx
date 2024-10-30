import { useState } from "react";
import Cards from "../components/Cards";
import Highlight from "../components/Highlight";
import "../style/payRent.css";
import Testmonials from "../components/Testmonials";
import Faqs from "../components/Faqs";
import QuickChat from "../components/QuickChat";
const PayRent = () => {
  const services = [
    {
      img: "src/assets/payrent_images/Instacash-icon.svg",
      name: "NB InstaCash",
      des: "Get Instant Cash Upto ₹10 Lakhs",
      link: "https://www.nobroker.in/instacash/landing?isHybrid=true&hybridActionBar=false&nbFr=rent_page_desktop",
      linkName: "Withdraw Now",
    },
    {
      img: "src/assets/payrent_images/dhamaka_1.png",
      name: "CashBack Dhamaka",
      des: "It's raining cashback! Every 100th user gets ₹100 or ₹1000 cashback",
      link: "",
      linkName: "View winners",
    },
    {
      img: "src/assets/payrent_images/renter_club.svg",
      name: "Renter's Club",
      des: "Get 50% Off on processing fees by inviting your friends",
      link: "",
      linkName: "",
    },
    {
      img: "src/assets/payrent_images/card.svg",
      name: "Now pay Society Maintenance too",
      des: "All your property payments at one place - rent, maintenance, deposit, token",
      link: "",
      linkName: "",
    },
    {
      img: "src/assets/payrent_images/credit_card.svg",
      name: "Earn upto ₹30,000/- in Rewards",
      des: "Earn miles and reward points on your Visa and Mastercard cards plus enjoy upto 45 days interest free credit period.",
      link: "",
      linkName: "",
    },
    {
      img: "src/assets/payrent_images/no_hidden_cost.svg",
      name: "Earn upto ₹30,000/- in Rewards",
      des: "Earn miles, get cash back and reward points on every property payment with your card.",
      link: "",
      linkName: "",
    },
    {
      img: "src/assets/payrent_images/credit_card.svg",
      name: "Pay with Credit Card",
      des: "We accept major cards like Visa and Mastercard so your property payment is hassle free.",
      link: "",
      linkName: "",
    },
    {
      img: "src/assets/payrent_images/money.svg",
      name: "Enjoy 45 days interest free credit period",
      des: "Depending on your card statement date",
      link: "",
      linkName: "",
    },
    {
      img: "src/assets/payrent_images/milestone.svg",
      name: "Reach Milestones Faster",
      des: "Earn rewards on those yearly spends with your credit card.",
      link: "",
      linkName: "",
    },
    {
      img: "src/assets/payrent_images/digital_rent_receipt.svg",
      name: "Digital Receipts",
      des: "Payment receipts are generated instantly and sent directly to your email ID. Claim your HRA with ease.",
      link: "",
      linkName: "",
    },
    {
      img: "src/assets/payrent_images/no_broker_trust.svg",
      name: "NoBroker Trust",
      des: "NoBroker Pay is a product by NoBroker and is 100% secure with PCI compliant payment gateway.",
      link: "",
      linkName: "",
    },
  ];

  const offers = [
    {
      img: "src/assets/payrent_images/logo.png",
      title: "Flat ₹100 off on Gift Vouchers on Rent Payment",
      link: "",
    },
    {
      img: "src/assets/payrent_images/dhamaka_1.png",
      title: "Guaranteed Cashback, upto 100% Processing Fees!",
      link: "",
    },
    {
      img: "src/assets/payrent_images/dhamaka_1.png",
      title:
        "It's raining cashback! Every 100th user gets ₹100 or ₹1000 cashback",
      link: "",
    },
    {
      img: "src/assets/payrent_images/logo.png",
      title: "Win Cashback or Partner Offers on Rent and Fees payment",
      link: "",
    },
  ];
  // to open and close offers displaying box
  const [visibleAllOffers, setVisibleAllOffers] = useState(false);
  const handleOfferBox = () => {
    setVisibleAllOffers(!visibleAllOffers);
    visibleAllOffers
      ? document.body.classList.remove("noScroll")
      : document.body.classList.add("noScroll");
  };
  return (
    <div className=" w-full h-auto flex justify-center flex-col">
      {/* quick chat button  */}

      <QuickChat />

      {/* forms */}

      <div className="w-full bg-blue text-white flex justify-center md:py-8 md:px-14">
        <div className="md:w-11/12 w-full flex md:flex-row flex-col">
          {/* left */}

          <div className="flex pt-4 md:pt-0 flex-col md:gap-8 gap-3 w-full">
            <h1 className="text-base font-bold md:ml-0 md:text-2xl">
              Pay Rent and Fees with Credit Cart
            </h1>
            <div className="bg-dark_blue py-1 px-2 flex gap-2 items-center md:rounded-md md:w-80 w-full">
              <img src="src/assets/payrent_images/verified-icon.svg" alt="" />
              <span className="font-bold text-sm">
                Lowest Charges. Instant Transfers.
              </span>
              <button className="border border-white flex items-center justify-center h-5 w-5 rounded-full text-xs">
                i
              </button>
            </div>
            <ul className="md:flex hidden flex-col gap-8">
              {services.map((s, index) => {
                const { img, name, des, link, linkName } = s;
                return (
                  <li key={index} className="flex gap-16 items-end">
                    <div className="h-16 w-16 rounded-lg bg-white overflow-hidden flex-shrink-0 p-2">
                      <img
                        src={img}
                        alt={name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <article className="flex flex-col gap-1">
                      <h1 className="font-semibold text-sm">{name}</h1>
                      <p className="text-xs font-light">{des}</p>
                      <a href={link} className="font-norma text-sm underline">
                        {linkName}
                      </a>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* right */}

          <div className="text-black w-full md:pl-16 pl-0">
            <div className="bg-white md:mt-4 mt-0 py-4 px-8 md:rounded-lg flex flex-col-reverse md:flex-col">
              <Highlight data={offers} click={handleOfferBox} />
              <Cards
                data={offers}
                visible={visibleAllOffers}
                click={handleOfferBox}
              />
              <form
                action=""
                id="payRentForm"
                className="flex flex-col gap-3 text-sm"
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="payment type" className="font-semibold">
                    Payment Type
                  </label>
                  <select name="paymentType" id="paymentType">
                    <option value="houeRent" className="capitalize">
                      House rent
                    </option>
                    <option value="schoolCollegeFees" className="capitalize">
                      school / college fees
                    </option>
                    <option value="tutionFees" className="capitalize">
                      tution fees
                    </option>
                    <option value="societyMaintenance" className="capitalize">
                      society maintenance
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="font-semibold">
                    Your Name
                  </label>
                  <input type="text" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="font-semibold">
                    Mobile Number
                  </label>
                  <input type="num" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="font-semibold">
                    Your Email
                  </label>
                  <input type="email" />
                </div>
                <div className="flex items-center">
                  <input type="checkbox" /> &nbsp;
                  <span>
                    I agree to the NoBroker{" "}
                    <a href="" className="font-semibold">
                      Terms and Conditions
                    </a>
                  </span>
                </div>
                <button className="bg-red hover:bg-rose-700 py-2 text-white font-semibold">
                  Get Started
                </button>
                <div className="bg-gray-200 flex gap-3 p-2 rounded-t-md mt-6">
                  <img src="src/assets/payrent_images/power.svg" alt="icon" />
                  <div>
                    <h1 className="text-sm font-semibold">
                      24/7 Instant Transfers
                    </h1>
                    <p className="text-xs font-light">
                      Your payment will be transferred instantly to your
                      landlord’s account*
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* benefits */}

      <div className="w-full flex items-center justify-center gap-4 py-16 md:flex-row flex-col flex-wrap">
        <div className="md:w-4/12 w-11/12 md:text-left text-center">
          <h1 className="text-xl mb-3">Earn money with NoBroker Pay</h1>
          <h4 className="text-slate-400">
            Start paying rent using your credit card and earn miles, cashback
            and reward points.
          </h4>
        </div>
        <div className="md:w-4/12 w-11/12 px-6 py-8 border-2 bg-slate-50 border-blue flex gap-3">
          <img src="src/assets/payrent_images/bulb.png" alt="bulb" />
          <h3>
            You can earn up to ₹30,000* by just paying rent for a year by using
            your credit card
          </h3>
        </div>
        <p className="text-xs text-center">
          *This is calculated assuming an annual rent of 4.5 Lakhs on a Club
          Vistara SBI Card PRIME (Premium)
        </p>
      </div>

      {/* How it works */}

      <div className="w-full flex items-center justify-center bg-dark_blue text-white py-16 gap-4 px-10 md:flex-row flex-col">
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src="src/assets/payrent_images/step1.svg"
            alt="icon"
            className="w-20 h-20"
          />
          <h1 className="border-2 border-white rounded-full flex items-center justify-center h-6 w-6">
            <span className="text-xs">1</span>
          </h1>
          <h2>Fill Transaction Detail</h2>
          <h4 className="font-light text-sm text-center">
            Provide your beneficiary bank details, and we will setup your
            account.
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src="src/assets/payrent_images/step2.svg"
            alt="icon"
            className="w-20 h-20"
          />
          <h1 className="border-2 border-white rounded-full flex items-center justify-center h-6 w-6">
            <span className="text-xs">2</span>
          </h1>
          <h2>Make Payment</h2>
          <h4 className="font-light text-sm text-center">
            Make payment through your credit card or debit card.
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src="src/assets/payrent_images/step3.svg"
            alt="icon"
            className="w-20 h-20"
          />
          <h1 className="border-2 border-white rounded-full flex items-center justify-center h-6 w-6">
            <span className="text-xs">3</span>
          </h1>
          <h2>Payment Credited!</h2>
          <h4 className="font-light text-sm text-center">
            Your payment is credited to your beneficiary’s bank account within 2
            working days.
          </h4>
        </div>
      </div>

      {/* testmonials */}

      <div className="flex items-center flex-col py-10 bg-slate-200">
        <h1 className="text-center text-xl">
          Testimonials from our NoBroker Pay customers
        </h1>
        <Testmonials />
      </div>

      {/* faqs */}

      <div className="flex items-center flex-col py-10 bg-white">
        <h1 className="text-center text-xl">Frequently Asked Questions</h1>
        <Faqs />
      </div>
    </div>
  );
};

export default PayRent;