package com.app.skill.pro.Model;

import java.io.Serializable;
import java.util.List;

public class SectionModel implements Serializable {

    private String title;
    private String type;
    private String icon;
    private List<ContentModel> contents;

    public SectionModel() {
        // Default constructor
    }

    public SectionModel(String title, String type, String icon, List<ContentModel> contents) {
        this.title = title;
        this.type = type;
        this.icon = icon;
        this.contents = contents;
    }

    // Getters
    public String getTitle() {
        return title;
    }

    public String getType() {
        return type;
    }

    public String getIcon() {
        return icon;
    }

    public List<ContentModel> getContents() {
        return contents;
    }

    // Setters
    public void setTitle(String title) {
        this.title = title;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public void setContents(List<ContentModel> contents) {
        this.contents = contents;
    }
}
