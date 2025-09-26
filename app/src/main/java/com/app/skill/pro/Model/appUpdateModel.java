package com.app.skill.pro.Model;

public class appUpdateModel {

    private int forceupdate;
    private int version;

    public appUpdateModel(int forceupdate, int version) {
        this.forceupdate = forceupdate;
        this.version = version;
    }

    public int getForceupdate() {
        return forceupdate;
    }

    public void setForceupdate(int forceupdate) {
        this.forceupdate = forceupdate;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }
}
