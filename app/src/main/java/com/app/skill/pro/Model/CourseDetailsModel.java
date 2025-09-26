package com.app.skill.pro.Model;

import java.util.List;

public class CourseDetailsModel {
    private int courseId;
    private String title;
    private List<SectionModel> sections;

    public int getCourseId() {
        return courseId;
    }

    public String getTitle() {
        return title;
    }

    public List<SectionModel> getSections() {
        return sections;
    }
}
