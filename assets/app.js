import 'bootstrap/dist/css/bootstrap.min.css';
import  './vendor/datatables/dataTables.bootstrap4.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/app.css';
import './styles/sb-admin-2.css';

import 'bootstrap'

import jquery from './vendor/jquery/jquery.index.js';
const $ = jquery;
window.$ = window.jQuery = $;

import './sb-admin-2.js'

import  './vendor/datatables/jquery.dataTables.js';
import './vendor/datatables/dataTables.bootstrap4.js'
import { language } from './i18n/datatables.fr.js';
//TODO: gérer l'i18n

$(document).ready(function() {
    $('.dataTable').DataTable({
        language: language
    });
});
