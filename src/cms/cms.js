import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview';
import ButtonComponent from './components/button';
import * as FontawesomeWidget from "./widgets/fontawesome.js";
import IconBoxComponent from './components/icon-box';
import WhitePapersPreview from './preview-templates/WhitePapersPagePreview'
import AnnouncementPagePreview from './preview-templates/AnnouncementPagePreview';
import WhitePaperPagePreview from './preview-templates/WhitePaperPagePreview';

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerWidget(
    "fontawesome-regular",
    FontawesomeWidget.Regular,
    FontawesomeWidget.Preview
);

CMS.registerWidget(
    "fontawesome-solid",
    FontawesomeWidget.Solid,
    FontawesomeWidget.Preview
);

CMS.registerWidget(
    "fontawesome-brands",
    FontawesomeWidget.Brands,
    FontawesomeWidget.Preview
);

CMS.registerEditorComponent(ButtonComponent);
CMS.registerEditorComponent(IconBoxComponent);

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('whitepapers-index', WhitePapersPreview)
CMS.registerPreviewTemplate('whitepapers', WhitePaperPagePreview)
CMS.registerPreviewTemplate('announcements', AnnouncementPagePreview)
