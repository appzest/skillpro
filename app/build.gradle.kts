plugins {
    alias(libs.plugins.android.application)
    id("com.google.gms.google-services")
    id("com.google.firebase.crashlytics")
}

android {
    namespace = "com.app.skill.pro"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.app.skill.pro"
        minSdk = 24
        targetSdk = 35
        versionCode = 2
        versionName = "1.0.1"
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}

dependencies {

    implementation(libs.appcompat)
    implementation(libs.material)
    testImplementation(libs.junit)
    androidTestImplementation(libs.ext.junit)
    androidTestImplementation(libs.espresso.core)


    //Firebase
    implementation(platform("com.google.firebase:firebase-bom:26.5.0"))
    implementation("com.google.firebase:firebase-database")
    implementation("com.google.firebase:firebase-crashlytics")
    implementation("com.google.firebase:firebase-perf")
    implementation("com.google.firebase:firebase-analytics:20.1.2")
    implementation("com.google.firebase:firebase-auth")
    implementation("com.google.android.gms:play-services-ads-identifier:17.0.0")
    implementation("com.google.android.gms:play-services-base:17.6.0")
    implementation("com.google.android.gms:play-services-auth:19.0.0")
    implementation("com.github.bumptech.glide:glide:4.12.0")
    implementation("com.squareup.retrofit2:retrofit:2.11.0")
    implementation("com.squareup.retrofit2:converter-gson:2.11.0")
    implementation("com.android.installreferrer:installreferrer:2.2")
    implementation("com.onesignal:OneSignal:[5.0.0, 5.99.99]")
    implementation("de.hdodenhof:circleimageview:3.1.0")
    implementation("com.airbnb.android:lottie:6.6.7")
    implementation("com.cashfree.pg:api:2.2.8")

}