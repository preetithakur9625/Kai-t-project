
$(document).ready(function () {
    let rightSidePanel = $("#dashboard-app");
    let sidebar = $("#sidebar");
    let hideSideBar = $("#hideSideBar");
    let showSideBar = $("#showSideBar");

    function hideSideBarFunction() {
        sidebar.css("margin-left", "-1000px");
        rightSidePanel.addClass("m-0");
        showSideBar.show();
    }
    function showSideBarFunction() {
        sidebar.css("margin-left", "0px");
        rightSidePanel.removeClass("m-0");
        showSideBar.hide();
    }



    hideSideBar.click(hideSideBarFunction);
    showSideBar.click(showSideBarFunction);
})