package com.app.skill.pro.Model;

public class CourseModel {
    private int Id;
    private String courseName;
    private String courseLogo;
    private String tag;
    private String description;

    public CourseModel(int Id, String courseName, String courseLogo, String tag, String description) {
        this.Id = Id;
        this.courseName = courseName;
        this.courseLogo = courseLogo;
        this.tag = tag;
        this.description = description;
    }

    public int getId() {
        return Id;
    }

    public String getCourseName() {
        return courseName;
    }

    public String getCourseLogo() {
        return courseLogo;
    }

    public String getTag() {
        return tag;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}