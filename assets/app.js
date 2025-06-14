import '@fortawesome/fontawesome-free/css/all.css';
import $ from 'jquery';
window.$ = window.jQuery = $;
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css'
import './styles/app.css';
import './styles/sb-admin-2.css';
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
import './sb-admin-2.js'

import { language } from './i18n/datatables/datatables.fr.js';
//TODO: gérer l'i18n

$(document).ready(function() {
    $('.dataTable').DataTable({
        language: language
    });
});
