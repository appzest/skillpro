package com.app.skill.pro;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

import com.cashfree.pg.api.CFPaymentGatewayService;
import com.cashfree.pg.core.api.CFSession;
import com.cashfree.pg.core.api.callback.CFCheckoutResponseCallback;
import com.cashfree.pg.core.api.exception.CFException;
import com.cashfree.pg.core.api.exception.CFInvalidArgumentException;
import com.cashfree.pg.core.api.utils.CFErrorResponse;
import com.cashfree.pg.core.api.webcheckout.CFWebCheckoutPayment;
import com.cashfree.pg.core.api.webcheckout.CFWebCheckoutTheme;
import com.cashfree.pg.ui.api.upi.intent.CFIntentTheme;
import com.cashfree.pg.ui.api.upi.intent.CFUPIIntentCheckout;
import com.cashfree.pg.ui.api.upi.intent.CFUPIIntentCheckoutPayment;
import com.google.android.gms.common.api.ApiException;

import java.util.Arrays;

public class CheckoutActivity extends AppCompatActivity implements CFCheckoutResponseCallback {

    TextView tvPlanName, tvPrice, tvValidity;
    Button btnProceed;
    ImageView btnBack;

    String orderID = "order_107472283140GyJ0fHa8T4nve0ll7GNtp8d";
    String paymentSessionID = "session_C3ry6dFXf_coYEwx48gO-Kz3t9we7e99K8lhFE5hTNFkw9udHzSyJgvT_VXHiNsYc5ScJNM7q6V-KYsbR0Vt3zZjxKJc-k9XUrCz8MbtoMim2Gjj4p3jIqmPjcKeNApaymentpayment";
    CFSession.Environment cfEnvironment = CFSession.Environment.SANDBOX;


    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cart);

        ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) actionBar.hide();

        try {
            CFPaymentGatewayService.getInstance().setCheckoutCallback(CheckoutActivity.this);
        } catch (CFException e) {
            e.printStackTrace();
        }

        tvPlanName = findViewById(R.id.tv_plan_name);
        tvPrice = findViewById(R.id.tv_price);
        tvValidity = findViewById(R.id.tv_validity);
        btnProceed = findViewById(R.id.btn_proceed_payment);
        btnBack = findViewById(R.id.btn_back);

        // Get data from VipActivity
        Intent intent = getIntent();
        String planName = intent.getStringExtra("PLAN_NAME");
        String price = intent.getStringExtra("PRICE");
        String validity = intent.getStringExtra("VALIDITY");

        tvPlanName.setText(planName);
        tvPrice.setText("Price: ₹" + price);
        tvValidity.setText("Validity: " + validity);
        btnProceed.setText("Proceed to Pay ₹" + price);
        btnBack.setOnClickListener(v -> finish());

        btnProceed.setOnClickListener(v -> {
            doWebCheckoutPayment();
//            doUPIIntentCheckoutPayment();
            Toast.makeText(CheckoutActivity.this, "Payment Gateway is not activated!", Toast.LENGTH_SHORT).show();
        });


    }

    @Override
    public void onPaymentVerify(String orderID) {
        Log.e("onPaymentVerify", "verifyPayment triggered");
        // Start verifying your payment
    }

    @Override
    public void onPaymentFailure(CFErrorResponse cfErrorResponse, String orderID) {
        Log.e("onPaymentFailure " + orderID, cfErrorResponse.getMessage());
    }


    public void doWebCheckoutPayment() {
        try {
            CFSession cfSession = new CFSession.CFSessionBuilder()
                    .setEnvironment(cfEnvironment)
                    .setPaymentSessionID(paymentSessionID)
                    .setOrderId(orderID)
                    .build();
            // Replace with your application's theme colors
            CFWebCheckoutTheme cfTheme = new CFWebCheckoutTheme.CFWebCheckoutThemeBuilder()
                    .setNavigationBarBackgroundColor("#fc2678")
                    .setNavigationBarTextColor("#ffffff")
                    .build();
            CFWebCheckoutPayment cfWebCheckoutPayment = new CFWebCheckoutPayment.CFWebCheckoutPaymentBuilder()
                    .setSession(cfSession)
                    .setCFWebCheckoutUITheme(cfTheme)
                    .build();
            CFPaymentGatewayService.getInstance().doPayment(CheckoutActivity.this, cfWebCheckoutPayment);
        } catch (CFException exception) {
            exception.printStackTrace();
        }
    }




}
