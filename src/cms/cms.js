import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview';
import ButtonComponent from './components/button';
import * as FontawesomeWidget from "./widgets/fontawesome.js";
import IconBoxComponent from './components/icon-box';

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

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
