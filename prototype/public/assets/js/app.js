"use strict";function setCookie(e,o,t){var n=new Date;n.setTime(n.getTime()+24*t*60*60*1e3);var a="expires="+n.toUTCString();document.cookie=e+"="+o+";"+a+";path=/"}function getCookie(e){for(var o=e+"=",t=decodeURIComponent(document.cookie),n=t.split(";"),a=0;a<n.length;a++){for(var s=n[a];" "==s.charAt(0);)s=s.substring(1);if(0==s.indexOf(o))return s.substring(o.length,s.length)}return""}function checkCookieMessage(){"yes"!==getCookie("cookieConfirm")&&document.getElementById("cookieMessage").classList.add("show")}function cookieAgree(){setCookie("cookieConfirm","yes",365),document.getElementById("cookieMessage").classList.remove("show")}function hasClass(e,o){return e.className&&new RegExp("(\\s|^)"+o+"(\\s|$)").test(e.className)}function jobsLoadingIndicator(){var e=document.getElementsByClassName("job-listing__list-container")[0];hasClass(e,"loading")?e.classList.remove("loading"):e.classList.add("loading")}function checkboxLabel(e){e.getElementsByTagName("input")[0].checked===!0?(e.classList.remove("active"),e.getElementsByTagName("input")[0].checked=!1):(e.classList.add("active"),e.getElementsByTagName("input")[0].checked=!0)}function stopBodyScrolling(e){e===!0?document.body.addEventListener("touchmove",freezeVp,!1):document.body.removeEventListener("touchmove",freezeVp,!1)}function menuScroll(){var e=$("header.navigation"),o=$(window).scrollTop();$(window).width()>767&&(o>=100?e.hasClass("scrolled")||e.addClass("scrolled"):e.hasClass("scrolled")&&e.removeClass("scrolled"))}function getFileName(e,o){$text=e.value,document.getElementById(o).innerHTML=$text.split("\\")[2]}function unblurApplication(){$("form.application-form").removeClass("application-sent")}function appCaptchaCallback(){$("form.application-form").find('input[type="submit"]').attr("disabled",!1).removeClass("disabled")}function urlParser(e){var o=document.createElement("a");o.href=e;var t=o.hostname;return t}function getReferrer(){var e=document.referrer;if(getCookie("referrerURL"))var o=getCookie("referrerURL");if(e.length>0||o){if("undefined"!=typeof o&&null!==o)var t=urlParser(o),n=o.split("?")[1];else var t=urlParser(e),n=e.split("?")[1];console.log(n);var a=!1,s=t;if("undefined"!=typeof n&&null!==n){for(var i=n.split("&"),l="gclid",c=[],d=0;d<i.length;d++)c.push(i[d].split("="));console.log(c);for(var d=0;d<c.length;d++)for(var r=c[d],m=0;m<r.length;m++)if(null!==r[m].match(l)){console.log(r[m]),a=!0,console.log(a);break}}t!==window.location.hostname?(console.log("from:"+s+" yay!"),o||setCookie("referrerURL",e,"7"),a===!0?(console.log("selecting Adwords!"),$("#jobFormModal").find('select[name="applicant-find"]').val("Google Adwords"),console.log($("#jobFormModal").find('select[name="applicant-find"]').find(":selected"))):(console.log("appending an option!"+s),$("#jobFormModal").find('select[name="applicant-find"]').append($("<option>",{value:s,text:s})),$("#jobFormModal").find('select[name="applicant-find"]').val(s),console.log($("#jobFormModal").find('select[name="applicant-find"]').find(":selected")))):($("#jobFormModal").find('select[name="applicant-find"]').val("Website SIR"),console.log("from: here, yay!"),console.log($("#jobFormModal").find('select[name="applicant-find"]').find(":selected")))}}function onFormSubmit(){$(document).on("submit","form.application-form, form.cv-form",function(){$(this).addClass("disabled").find('input[type="submit"]').attr("disabled",!0).addClass("disabled"),$(this).hasClass("application-form")?setCookie("jobid_"+$(this).find("input.job-id").val(),$(this).find("input.job-id").val(),365):$(this).hasClass("cv-form")&&setCookie("cvform","sent",365)})}function onFormLoad(){var e=$("form.application-form").find("input.job-id").val(),o=getCookie("jobid_"+e);getCookie("cvform")&&$("form.cv-form").addClass("cv-sent"),188!==e&&e==o&&$("form.application-form").addClass("application-sent")}function showForm(){document.getElementById("jobFormModal").style.display="flex",setTimeout(function(){document.getElementById("jobFormModal").classList.add("active"),document.getElementsByTagName("html")[0].classList.add("modal-open"),document.getElementsByTagName("html")[0].classList.add("menu-active"),document.getElementsByTagName("body")[0].classList.add("menu-active")},50),stopBodyScrolling(!0)}function hideForm(){document.getElementById("jobFormModal").classList.remove("active"),document.getElementsByTagName("html")[0].classList.remove("modal-open"),document.getElementsByTagName("html")[0].classList.remove("menu-active"),document.getElementsByTagName("body")[0].classList.remove("menu-active"),setTimeout(function(){document.getElementById("jobFormModal").style.display="none"},500),stopBodyScrolling(!1)}function lazyImages(){$(".lazy").each(function(){var e=$(this).data("src");$(this).attr("src",e).removeAttr("data-src")})}function clearForm(e){console.log(e);var o=e.elements;e.reset();for(var t=0;t<o.length;t++){var n=o[t].type.toLowerCase();switch(n){case"text":case"password":case"textarea":case"hidden":o[t].value="";break;case"radio":case"checkbox":o[t].checked&&(o[t].checked=!1);break;case"select-one":case"select-multi":o[t].selectedIndex=-1}}}function subMenuMobile(){$(".mobile-sub-menu").on("click",function(){$(this).toggleClass("active").next("ul.sub-menu").toggleClass("active")})}function menuMobile(){$(".mobile-btn").on("click",function(){$(this).toggleClass("active").next(".navigation__menu").toggleClass("active")})}var freezeVp=function(e){e.preventDefault()};document.getElementById("jobFormModal")&&document.getElementById("jobFormModal").addEventListener("click",function(e){e.target===document.getElementById("jobFormModal")&&hideForm()},!1),$(document).ready(function(){menuMobile(),subMenuMobile(),getReferrer(),onFormSubmit(),onFormLoad(),checkCookieMessage()}),$(window).on("load scroll",function(){menuScroll()}),$(window).on("load",function(){lazyImages()});