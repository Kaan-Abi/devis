import tinymce from "tinymce";
import 'tinymce/models/dom/model';
import 'tinymce/themes/silver/theme';
import 'tinymce/icons/default/icons';
import 'tinymce-i18n/langs/fr_FR';
import 'tinymce/skins/ui/oxide/skin.css'
import 'tinymce/skins/ui/oxide/content.css'

export const initRichEditor = async (options) => {
    await tinymce.init(options);
}

export const destroyRichEditor = (id) => {
    tinymce.get(id).remove()
}