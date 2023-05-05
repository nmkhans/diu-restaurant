/* const paymentCtrl = {
  // Get all payments in the admin panel
  getPayments: async (req, res) => {
    try {
      const payments = await Payments.find();
      res.json(payments);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // SSL Payment Initiation
  SSLCommerz_payment_init: async (req, res) => {
    try {
      

      // Transaction Status Response  ==============>>> If Need
      let transaction_status_response =
        await sslcommerz.transaction_status_id(tran_id);

      // Transaction Validation       ==============>>> If Need
      const { val_id } = req.body;
      let transaction_validate_response =
        await sslcommerz.validate_transaction_order(val_id);
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Validation To get Notification and Success URL
  SSLCommerz_payment_valid: async (req, res) => {
    try {
      const { val_id, tran_id } = req.body;
      let transaction_status_response =
        await sslcommerz.transaction_status_id(tran_id);


      

      const { status } = transaction_validate_response;
      if (status === "VALIDATED" && val_id !== "") {
        res.status(200).redirect("http://localhost:3000/success"); //Or any other Link you want to redirect it
      } else {
        res.status(400).redirect("http://localhost:3000/fail_cancel"); //Or any other Link you want to redirect it
      }
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Getting the session key from front end. By this I can get the transaction status, transaction ID etc.
  SSLCommerz_payment_session: async (req, res) => {
    try {
      const { sslSessionKey } = req.body;
      let transaction_session_response =
        await sslcommerz.transaction_status_session(sslSessionKey);

      res.json(transaction_session_response);
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // After the going to success page it will send data to database
  SSLCommerz_payment_session_paid: async (req, res) => {
    try {
      // Getting User Data from UserModel
      const user = await Users.findById(req.user.id).select(
        "name email phone"
      );
      if (!user)
        return res.status(400).json({ msg: "User does not exist." });
      const { _id, name, email, phone } = user;

      // Getting Data from Session
      const { sslSessionKey } = req.body;
      let transaction_session_response =
        await sslcommerz.transaction_status_session(sslSessionKey);

      // Data setting for another validation
      const { val_id } = transaction_session_response;
      let transaction_validate_response =
        await sslcommerz.validate_transaction_order(val_id);

      const { tran_id, tran_date, amount, status } =
        transaction_validate_response;

      // Check the Payment was done or not
      const paid = await Payments.findOne({ tran_id });
      if (paid) {
        return res.status(400).json({
          msg: "Payment already has been done of this Transaction ID",
        });
      }

      // Sending to Database if all is well!
      if (status === "VALIDATED" && val_id !== "") {
        const newPayment = new Payments({
          user_id: _id,
          name,
          phone,
          email,
          tran_id,
          val_id,
          paymentDetails: transaction_validate_response,
        });

        await newPayment.save();

        res.json({
          tran_id,
          tran_date,
          amount,
          status,
          name,
          email,
          phone,
          msg: "Your Payment was successfully paid!",
        });
      } else {
        return res.status(400).json({
          msg: "Fraud Payment detected. You are listed as a spy",
        });
      }
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // IPN controller to get the payment related issues from customer. (For future updated)
  SSLCommerz_payment_ipn_notify: async (req, res) => {
    try {
      res.json({ msg: "Ipn notification" });
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Payment Fail Redirection
  SSLCommerz_payment_failed: async (req, res) => {
    try {
      res.status(400).redirect("http://localhost:3000/fail_cancel"); //Or any other Link you want to redirect it
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Payment Cancel Redirection
  SSLCommerz_payment_cancelled: async (req, res) => {
    try {
      res.status(400).redirect("http://localhost:3000/fail_cancel"); //Or any other Link you want to redirect it
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = paymentCtrl;
 */