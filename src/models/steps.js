export const steps = [
  {
    label: "steps.my_data",
    value: 0,
    buttons: ["", "continue"],
    checkout_content: {
      title: {
        en: "My Data",
        zh_CN: "帳戶資料",
      },
      message: {
        en: "Please enter your personal data and press continue",
        zh_CN: "請輸入您的個人資料後並按下繼續按鈕",
      },
      img: "",
    },
  },
  {
    label: "steps.payment",
    value: 1,
    buttons: ["back", "pay"],
    checkout_content: {
      title: {
        en: "Payment",
        zh_CN: "付款",
      },
      message: {
        en: "After making the payment you will receive a confirmation email with details of your purchase",
        zh_CN: "付款完成後, 您會在電子郵件收到一封您的購買資訊",
      },
      img: "",
    },
  },
];