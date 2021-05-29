var featuresArr = [
  "Up to 5 geteways",
  "Basic support",
  "Monthly updates",
  "First month fee",
  "Cance anytime",
];

export const featuresList = [
  {
    uuid: "54c1184d-fb57-4c5f-bc99-8d308a282cbe",
    header: "Starter",
    price: 5,
    iconSlug: "/features/StarterIcon.svg",
    features: featuresArr,
  },
  {
    uuid: "86059c89-81fe-4258-828c-b2d04eae6f70",
    header: "Business",
    price: 10,
    iconSlug: "/features/BusinessIcon.svg",
    features: featuresArr,
  },
  {
    uuid: "b39b434f-9f59-443b-9b40-f1e35dca4e5e",
    header: "Enterprise",
    price: 15,
    iconSlug: "/features/EnterpriseIcon.svg",
    features: featuresArr,
  },
];

export const AppInformation = [
  {
    page: "index",
    name: "Personal info",
    component: "MenuIconsUser",
    description:
      "This is the personal info section of your account. Here you can easily change your basic info. After you finish updating this section please click the save changes button",
  },
  {
    page: "creditcard",
    name: "Your credit cards",
    component: "MenuIconsCreditCard",
    description:
      "Select a valid credit card for your Balance account or add a new card by clicking add new card and filling out the required card information on the left. New card can be selected after being added on the list below. ",
  },
  {
    page: "paymentplan",
    name: "Payment plan",
    component: "MenuIconsPayment",
    description:
      "This is the personal info section of your account. Here you can easily change your basic info. After you finish updating this section please click the save changes button ",
  },
  {
    page: "billing",
    name: "Billing info",
    component: "MenuIconsBilling",
    description:
      "This is the personal info section of your account. Here you can easily change your basic info. After you finish updating this section please click the save changes button  ",
  },
];

export const userBilling = [
  {
    plan: "Starter",
    amount: 3964,
    paidAt: getTimeNow(),
  },
  {
    plan: "Business",
    amount: 2554,
    paidAt: getTimeNow(),
  },
  {
    plan: "Enterprise",
    amount: 3547,
    paidAt: getTimeNow(),
  },
];

export const ourJourney = [
  {
    name: "projects",
    description: "4",
  },
  {
    name: "gateways",
    description: "3",
  },
  {
    name: "payments",
    description: "$14K",
  },
];

function getTimeNow() {
  return new Date().toLocaleString("en-GB");
}
