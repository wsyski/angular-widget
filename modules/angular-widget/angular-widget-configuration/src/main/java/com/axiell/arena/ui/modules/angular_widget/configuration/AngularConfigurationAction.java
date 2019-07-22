package com.axiell.arena.ui.modules.angular_portlet.configuration;

import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.portlet.ConfigurationAction;
import com.liferay.portal.kernel.portlet.DefaultConfigurationAction;
import org.osgi.framework.BundleContext;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import java.net.URL;
import java.util.Map;

@Component(
        immediate = true,
        property = "javax.portlet.name=" + "angular_widget",
        service = ConfigurationAction.class
)
public class AngularConfigurationAction extends DefaultConfigurationAction {
    private static final Log _log = LogFactoryUtil.getLog(
            AngularConfigurationAction.class);

    @Override
    public String getJspPath(HttpServletRequest httpServletRequest) {
        return "/configuration.jsp";
    }

    @Override
    @Reference(
            target = "(osgi.web.symbolicname=angular-widget)",
            unbind = "-"
    )
    public void setServletContext(ServletContext servletContext) {
        super.setServletContext(servletContext);
    }

    @Activate
    protected void activate(final BundleContext bundleContext, final Map<String, Object> properties) {
        _log.info(" activated: " +AngularConfigurationAction.class.getName());
    }
}
