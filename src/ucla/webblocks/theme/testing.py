from plone.app.testing import PloneWithPackageLayer
from plone.app.testing import IntegrationTesting
from plone.app.testing import FunctionalTesting

import ucla.webblocks.theme


UCLA_WEBBLOCKS_THEME = PloneWithPackageLayer(
    zcml_package=ucla.webblocks.theme,
    zcml_filename='testing.zcml',
    gs_profile_id='ucla.webblocks.theme:testing',
    name="UCLA_WEBBLOCKS_THEME")

UCLA_WEBBLOCKS_THEME_INTEGRATION = IntegrationTesting(
    bases=(UCLA_WEBBLOCKS_THEME, ),
    name="UCLA_WEBBLOCKS_THEME_INTEGRATION")

UCLA_WEBBLOCKS_THEME_FUNCTIONAL = FunctionalTesting(
    bases=(UCLA_WEBBLOCKS_THEME, ),
    name="UCLA_WEBBLOCKS_THEME_FUNCTIONAL")
