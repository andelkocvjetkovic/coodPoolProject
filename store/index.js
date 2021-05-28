export const state = () => ({
  appVersion: "1.0.2",
  user: {
    userName: "John Doe",
    email: "john.doe@email.com",
    phoneNumber: "387 61 123 456",
    selectedFeature: ["54c1184d-fb57-4c5f-bc99-8d308a282cbe"],
    userCards: [
      {
        cardNumber: "1234 5678 9012 3456",
        expMonth: 11,
        expYear: 2023,
        isActive: true,
      },
      {
        cardNumber: "1234 5678 9012 3456",
        expMonth: 11,
        expYear: 2023,
        isActive: false,
      },
      {
        cardNumber: "1234 5678 9012 3456",
        expMonth: 11,
        expYear: 2023,
        isActive: false,
      },
    ],
  },
});
