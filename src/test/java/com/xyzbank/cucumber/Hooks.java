package com.xyzbank.cucumber;

import com.cucumber.listener.Reporter;
import com.xyzbank.propertyreader.PropertyReader;
import com.xyzbank.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;


/**
 * By Nidhi Patel
 **/
public class Hooks extends Utility {
//({"@smoke","@sanity","@regression"})
    @Before
    public void setUP() {
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
    }

    @After
    public void tearDown(Scenario scenario) {
        if(scenario.isFailed()){
            String screenshotPath=Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenshotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        closeBrowser();
    }
}
