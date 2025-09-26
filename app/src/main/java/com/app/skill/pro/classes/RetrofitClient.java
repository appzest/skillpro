package com.app.skill.pro.classes;

import android.content.Context;

import androidx.annotation.NonNull;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitClient {

    private static Retrofit retrofit = null;
    private static OkHttpClient okHttpClient = null;

    // Build OkHttpClient ONCE and reuse it
    private static OkHttpClient getClient(String cookie) {
        if (okHttpClient == null) {
            okHttpClient = new OkHttpClient.Builder()
                    .connectTimeout(40, TimeUnit.SECONDS)
                    .writeTimeout(40, TimeUnit.SECONDS)
                    .readTimeout(40, TimeUnit.SECONDS)
                    .addInterceptor(new Interceptor() {
                        @Override
                        public Response intercept(@NonNull Chain chain) throws IOException {
                            Request original = chain.request();
                            Request request = original.newBuilder()
                                    .addHeader("Content-Type", "application/json")
                                    .addHeader("Cookie", cookie)
                                    .build();
                            return chain.proceed(request);
                        }
                    })
                    .build();
        }
        return okHttpClient;
    }

    // Retrofit instance
    public static Retrofit getRetrofit(Context context, String cookie) {
        if (retrofit == null) {
            retrofit = new Retrofit.Builder()
                    .client(getClient(cookie))
                    .baseUrl(RetrofitAPI.BASE_URL)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();
        }
        return retrofit;
    }
}
