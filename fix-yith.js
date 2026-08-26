const fs = require('fs');
const file = 'app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = '<script id="jquery-yith-wcwl-js" src="/vendor/plugins/yith-woocommerce-wishlist/assets/js/jquery.yith-wcwl.minf77d.js?ver=4.15.0"></script>';
const replacementStr = '<script>var yith_wcwl_l10n = {"ajax_url":"/wp-admin/admin-ajax.php","redirect_to_cart":"no","yith_wcwl_button_position":"shortcode","multi_wishlist":"","hide_add_button":"1","enable_ajax_loading":"","ajax_loader_url":"/vendor/plugins/yith-woocommerce-wishlist/assets/images/ajax-loader-alt.svg","remove_from_wishlist_after_add_to_cart":"1","is_wishlist_responsive":"1","time_to_close_prettyphoto":"3000","fragments_index_glue":".","reload_on_found_variation":"1","mobile_media_query":"768","labels":{"cookie_disabled":"We are sorry, but this feature is available only if cookies on your browser are enabled.","added_to_cart_message":"\\u003Cdiv class=\\"woocommerce-notices-wrapper\\"\\u003E\\u003Cdiv class=\\"woocommerce-message\\" role=\\"alert\\"\\u003EProduct added to cart successfully\\u003C/div\\u003E\\u003C/div\\u003E"},"actions":{"add_to_wishlist_action":"add_to_wishlist","remove_from_wishlist_action":"remove_from_wishlist","reload_wishlist_and_adding_elem_action":"reload_wishlist_and_adding_elem","load_mobile_action":"load_mobile","delete_item_action":"delete_item","save_title_action":"save_title","save_privacy_action":"save_privacy","load_fragments":"load_fragments"},"nonce":{"add_to_wishlist_nonce":"2e971e7d16","remove_from_wishlist_nonce":"3f9ec5ce4c","reload_wishlist_and_adding_elem_nonce":"2d4d8ac2fe","load_mobile_nonce":"7589b69cf2","delete_item_nonce":"e2667b2135","save_title_nonce":"6bfc0660d6","save_privacy_nonce":"00306ec2d9","load_fragments_nonce":"3f7cd076f3"},"redirect_after_ask_estimate":"","ask_estimate_redirect_url":"/"};\n</script>\n<script id="jquery-yith-wcwl-js" src="/vendor/plugins/yith-woocommerce-wishlist/assets/js/jquery.yith-wcwl.minf77d.js?ver=4.15.0"></script>';

content = content.replace(targetStr, replacementStr);

fs.writeFileSync(file, content);
console.log('Fixed yith_wcwl_l10n');
