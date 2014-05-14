package org.cru.logiclesstemplates.processors.dailycontent;

import com.xumak.base.templatingsupport.TemplateContentModel;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.api.SlingHttpServletRequest;

import java.util.Map;

import static com.xumak.base.Constants.RESOURCE_CONTENT_KEY;

/* DESCRIPTION
 * -----------------------------------------------------------------------------
 * AddYesterdaysPagePathContextProcessor
 * -----------------------------------------------------------------------------
 *
 * CHANGE HISTORY
 * -----------------------------------------------------------------------------
 * Version | Date        | Developer              | Changes
 * 1.0     | 2/5/14     | palecio                | Initial Creation
 * -----------------------------------------------------------------------------
 *
  ==============================================================================
 */
@Component
@Service
public class AddYesterdaysPagePathContextProcessor extends AbstractAddDailyContentPagePathContextProcessor {

    public static final String IS_YESTERDAY_DEFAULT_PATH = "isYesterdayDefaultPath";

    @Override
    public void process(final SlingHttpServletRequest request, final TemplateContentModel contentModel)
            throws Exception {
       /*
        super.process(request, contentModel);
        String yesterdaysPagePath =  getDailyContentPath(YESTERDAY);
        Map<String, Object> contentObject = (Map<String, Object>) contentModel.get(RESOURCE_CONTENT_KEY);

        contentObject.put(YESTERDAY, yesterdaysPagePath);
        contentObject.put(IS_YESTERDAY_DEFAULT_PATH, defaultPath.equals(yesterdaysPagePath));  */
    }

}
