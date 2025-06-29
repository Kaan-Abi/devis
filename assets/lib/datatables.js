import { language } from '../i18n/datatables/datatables.fr.js';
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
import 'datatables.net-responsive-bs4';
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.css'
//TODO: gérer l'i18n

$(document).ready(function() {
    $('.dataTable').DataTable({
        language: language,
        responsive: true
    });
});