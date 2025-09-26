package com.app.skill.pro.classes;


import java.util.List;

import com.app.skill.pro.Model.CourseDetailsModel;
import com.app.skill.pro.Model.appUpdateModel;
import com.app.skill.pro.Model.CourseModel;

import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface RetrofitAPI {





    public static final String BASE_URL = "https://api.skillpro.site/api/v1/";






    @GET("appupdate")
    Call<List<appUpdateModel>> getappUpdate();



    @POST("coursefetch")
    Call<List<CourseModel>> gettasksModel(@Body RequestBody body);



    @POST("coursedetailsfetch")
    Call<List<CourseDetailsModel>> getCoursDetailsModel();






}
