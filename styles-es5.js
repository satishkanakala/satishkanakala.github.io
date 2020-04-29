(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n\n:root {\n  --primaryColor: #f09d51;\n  --mainWhite: #fff;\n  --mainBlack: #222;\n  --mainGrey: #ececec;\n  --mainSpacing: 0.1rem;\n  --mainTransition: all 0.3s linear;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  color: var(--mainBlack);\n  background: var(--mainWhite);\n  font-family: \"Lato\", sans-serif;\n}\n\n/* --------------- Navbar ---------------- */\n\n.navbar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  height: 60px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background:#047DBF;\n  z-index: 1;\n}\n\n.cartheader{\n  text-align: center;\n  padding-top: 100px;\n  font-size: 20px;\n}\n\n.navbar-center {\n  width: 100%;\n  max-width: 1170px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n}\n\n.footer{\n  height: 30px;\n  width: 100%;\n  background:#047DBF;\n  position: fixed;\n  text-align: center;\n  bottom: 0px;\n  padding: 5px;\n}\n\n.nav-icon {\n  font-size: 1.5rem;\n  color: azure;\n}\n\n.nav-icon-logo{\n    font-size: 1.5rem;\n    color: #f8e831;\n}\n\n.counter{\n  display: flex;\n  letter-spacing: 8px;\n}\n\n.cart-btn {\n  position: relative;\n  cursor: pointer;\n}\n\n.cart-items {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  background: red;\n  padding: 0 5px;\n  border-radius: 30%;\n  color: var(--mainWhite);\n}\n\n/* --------------- End of Navbar ---------------- */\n\n.banner-btn {\n  padding: .5rem .6rem;\n  text-transform: uppercase;\n  letter-spacing: var(--mainSpacing);\n  font-size: .7rem;\n  background: #047DBF;\n  color: #fff;\n  border: 1px solid #fff;\n  transition: var(--mainTransition);\n  cursor: pointer;\n}\n\n.banner-btn:hover {\n  background:#666;\n  color: #fff;\n}\n\n/* --------------- Products ---------------- */\n\n.products {\n  padding: 2rem 0;\n}\n\n.products-center {\n  width: 90vw;\n  margin: 0 auto;\n  max-width: 1170px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-column-gap: 1.5rem;\n  grid-row-gap: 2rem;\n}\n\n.sortBy{\n  width: 50vw;\n  display: block;\n  margin: auto;\n  margin-bottom: 25px;\n  font-weight: bold;\n}\n\n.price-filter{\n  margin: 10%;\n  color:#047DBF;\n  cursor: pointer;\n}\n\n.img-container {\n  position: relative;\n  overflow: hidden;\n}\n\n.fa-shopping-cart {\n  margin-right: 0.5rem;\n}\n\n.img-container:hover .bag-btn {\n  transform: translateX(0);\n}\n\n.product-img {\n  display: block;\n  width: 100%;\n  min-height: 6rem;\n  transition: var(--mainTransition);\n}\n\n.img-container:hover .product-img {\n  opacity: 0.5;\n}\n\n.item-btn{\n  background: #047DBF;\n  color: #fff;\n  letter-spacing: var(--mainSpacing);\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0.5rem 0.75rem;\n  border-radius: 20px;\n  border: 0px;\n  margin: auto;\n  display: block;\n}\n\n.product h3 {\n  text-transform: capitalize;\n  font-size: 1.1rem;\n  margin-top: 0.5rem;\n  letter-spacing: var(--mainSpacing);\n  text-align: center;\n}\n\n.product h4 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  letter-spacing: var(--mainSpacing);\n  color: #222;\n  text-align: center;\n}\n\n/* ---------------End of Products ---------------- */\n\n/* --------------- Cart ---------------- */\n\n.cart-overlay {\n  width: 100%;\n  height: 100%;\n}\n\n.cart {\n  width: 90%;\n  height: 100%;\n  margin: auto;\n  background: #fff;\n  padding: 0rem 1.5rem;\n}\n\n.cart-content{\n  width: 65% !important;\n}\n\n.cartHeading {\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n}\n\n@media screen and (min-width: 768px) {\n  .cart {\n    width: 100%;\n    min-width: 450px;\n  }\n}\n\n@media screen and (max-width: 468px) {\n  .cart-content{\n    width: 100% !important;\n  }\n  .cart {\n    width: 100% !important;\n    padding: 0rem 0.5rem;\n}\n  .cart-footer {\n    width: 76% !important;\n    position: fixed;\n    bottom: 5%;\n    margin-top: 0px !important;\n    left: 10%;\n    height: 117px !important;\n    padding: 2px !important;\n}\n  .cart-item {\n    display: grid;\n    align-items: center;\n    grid-template-columns: auto 1fr 1fr auto;\n    grid-column-gap: 0.5rem;\n    margin: 0.5rem 0;\n  }\n  .cart-item img {\n    width: 50px;\n    height: 50px;\n  }\n  .cart-item h4 {\n    font-size: 0.55rem;\n    text-transform: capitalize;\n    letter-spacing: var(--mainSpacing);\n  }\n  .cart-item h5 {\n    margin: 0.3rem 0;\n    letter-spacing: var(--mainSpacing);\n  }\n  .close-cart {\n    font-size: 0.7rem;\n    cursor: pointer;\n  }\n  .products-center {\n    width: 100vw;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));\n    grid-column-gap: 0.5rem;\n    grid-row-gap: 0.5rem;\n  }\n  .sortBy {\n    width: 90vw;\n    font-size: 15px;\n}\n.price-filter {\n  margin: 2%;\n  font-size: 14px;\n}\n}\n\n.delPrice{\ncolor: #777;\npadding-right: 5px;\n}\n\n.discPrice{\n  color: limegreen;\n}\n\n.close-cart {\n  font-size: 1.7rem;\n  cursor: pointer;\n}\n\n.cart h2 {\n  text-transform: capitalize;\n  text-align: center;\n  letter-spacing: var(--mainSpacing);\n  margin-bottom: 2rem;\n}\n\n.makebold{\n  font-weight: 600;\n}\n\n/*---------- Cart Item -------------------- */\n\n.cart-item {\n  display: grid;\n  align-items: center;\n  grid-template-columns:  1fr 1fr 1fr 1fr ;\n  grid-column-gap: 1.5rem;\n  margin: 1.5rem 0;\n  border: 1px solid #444;\n  padding: 5px;\n}\n\n.cart-item img {\n  width: 75px;\n  height: 75px;\n}\n\n.cart-item h4 {\n  font-size: 0.85rem;\n  text-transform: capitalize;\n  letter-spacing: var(--mainSpacing);\n}\n\n.cart-item h5 {\n  margin: 0.5rem 0;\n  letter-spacing: var(--mainSpacing);\n}\n\n.item-amount {\n  text-align: center;\n}\n\n.remove-item {\n  color: grey;\n  cursor: pointer;\n}\n\n.fa-chevron-up,\n.fa-chevron-down {\n  color: #047DBF;\n  cursor: pointer;\n}\n\n/*---------- End of Cart Item -------------------- */\n\n.cart-footer {\n  width: 32%;\n  border: 1px solid #666;\n  padding: 10px;\n  margin-top: 1.4rem;\n  height: 150px;\n  margin-left: 3%;\n  letter-spacing: var(--mainSpacing);\n  text-align: center;\n}\n\n.cart-footer h3 {\n  text-transform: capitalize;\n  margin-bottom: 1rem;\n}\n\n/* --------------- End of Cart ---------------- */\n\n/*# sourceMappingURL=data:application/json;base64,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QjtFQUN2QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFDQSxvREFBb0Q7O0FBRXBEO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckI7O0FBRUEsaURBQWlEIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwXCIpO1xuXG46cm9vdCB7XG4gIC0tcHJpbWFyeUNvbG9yOiAjZjA5ZDUxO1xuICAtLW1haW5XaGl0ZTogI2ZmZjtcbiAgLS1tYWluQmxhY2s6ICMyMjI7XG4gIC0tbWFpbkdyZXk6ICNlY2VjZWM7XG4gIC0tbWFpblNwYWNpbmc6IDAuMXJlbTtcbiAgLS1tYWluVHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xufVxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICBjb2xvcjogdmFyKC0tbWFpbkJsYWNrKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbldoaXRlKTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tIE5hdmJhciAtLS0tLS0tLS0tLS0tLS0tICovXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiMwNDdEQkY7XG4gIHotaW5kZXg6IDE7XG59XG4uY2FydGhlYWRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5uYXZiYXItY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTE3MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbn1cbi5mb290ZXJ7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IzA0N0RCRjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubmF2LWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IGF6dXJlO1xufVxuLm5hdi1pY29uLWxvZ297XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6ICNmOGU4MzE7XG59XG4uY291bnRlcntcbiAgZGlzcGxheTogZmxleDtcbiAgbGV0dGVyLXNwYWNpbmc6IDhweDtcbn1cbi5jYXJ0LWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcnQtaXRlbXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IC04cHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgY29sb3I6IHZhcigtLW1haW5XaGl0ZSk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gRW5kIG9mIE5hdmJhciAtLS0tLS0tLS0tLS0tLS0tICovXG4uYmFubmVyLWJ0biB7XG4gIHBhZGRpbmc6IC41cmVtIC42cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWFpblNwYWNpbmcpO1xuICBmb250LXNpemU6IC43cmVtO1xuICBiYWNrZ3JvdW5kOiAjMDQ3REJGO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tbWFpblRyYW5zaXRpb24pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmFubmVyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IzY2NjtcbiAgY29sb3I6ICNmZmY7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gUHJvZHVjdHMgLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ucHJvZHVjdHMge1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG4ucHJvZHVjdHMtY2VudGVyIHtcbiAgd2lkdGg6IDkwdnc7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDExNzBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdyaWQtY29sdW1uLWdhcDogMS41cmVtO1xuICBncmlkLXJvdy1nYXA6IDJyZW07XG59XG4uc29ydEJ5e1xuICB3aWR0aDogNTB2dztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJpY2UtZmlsdGVye1xuICBtYXJnaW46IDEwJTtcbiAgY29sb3I6IzA0N0RCRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmltZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mYS1zaG9wcGluZy1jYXJ0IHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uaW1nLWNvbnRhaW5lcjpob3ZlciAuYmFnLWJ0biB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cbi5wcm9kdWN0LWltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNnJlbTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tbWFpblRyYW5zaXRpb24pO1xufVxuLmltZy1jb250YWluZXI6aG92ZXIgLnByb2R1Y3QtaW1nIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLml0ZW0tYnRue1xuICBiYWNrZ3JvdW5kOiAjMDQ3REJGO1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLW1haW5TcGFjaW5nKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnByb2R1Y3QgaDMge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLW1haW5TcGFjaW5nKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZHVjdCBoNCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWFpblNwYWNpbmcpO1xuICBjb2xvcjogIzIyMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tRW5kIG9mIFByb2R1Y3RzIC0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSBDYXJ0IC0tLS0tLS0tLS0tLS0tLS0gKi9cbi5jYXJ0LW92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNhcnQge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMHJlbSAxLjVyZW07XG59XG4uY2FydC1jb250ZW50e1xuICB3aWR0aDogNjUlICFpbXBvcnRhbnQ7XG59XG4uY2FydEhlYWRpbmcge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDQ1MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjhweCkge1xuICAuY2FydC1jb250ZW50e1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcnQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHJlbSAwLjVyZW07XG59XG4gIC5jYXJ0LWZvb3RlciB7XG4gICAgd2lkdGg6IDc2JSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDUlO1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDEwJTtcbiAgICBoZWlnaHQ6IDExN3B4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59XG4gIC5jYXJ0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIDFmciBhdXRvO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMC41cmVtO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gIH1cbiAgLmNhcnQtaXRlbSBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuICAuY2FydC1pdGVtIGg0IHtcbiAgICBmb250LXNpemU6IDAuNTVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLW1haW5TcGFjaW5nKTtcbiAgfVxuICAuY2FydC1pdGVtIGg1IHtcbiAgICBtYXJnaW46IDAuM3JlbSAwO1xuICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tYWluU3BhY2luZyk7XG4gIH1cbiAgLmNsb3NlLWNhcnQge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAucHJvZHVjdHMtY2VudGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEyNXB4LCAxZnIpKTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgICBncmlkLXJvdy1nYXA6IDAuNXJlbTtcbiAgfVxuICAuc29ydEJ5IHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4ucHJpY2UtZmlsdGVyIHtcbiAgbWFyZ2luOiAyJTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxufVxuXG4uZGVsUHJpY2V7XG5jb2xvcjogIzc3NztcbnBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5kaXNjUHJpY2V7XG4gIGNvbG9yOiBsaW1lZ3JlZW47XG59XG4uY2xvc2UtY2FydCB7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FydCBoMiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tYWluU3BhY2luZyk7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ubWFrZWJvbGR7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4vKi0tLS0tLS0tLS0gQ2FydCBJdGVtIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uY2FydC1pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMWZyIDFmciAxZnIgMWZyIDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxLjVyZW07XG4gIG1hcmdpbjogMS41cmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jYXJ0LWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi5jYXJ0LWl0ZW0gaDQge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWFpblNwYWNpbmcpO1xufVxuLmNhcnQtaXRlbSBoNSB7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tYWluU3BhY2luZyk7XG59XG4uaXRlbS1hbW91bnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVtb3ZlLWl0ZW0ge1xuICBjb2xvcjogZ3JleTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZhLWNoZXZyb24tdXAsXG4uZmEtY2hldnJvbi1kb3duIHtcbiAgY29sb3I6ICMwNDdEQkY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qLS0tLS0tLS0tLSBFbmQgb2YgQ2FydCBJdGVtIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5jYXJ0LWZvb3RlciB7XG4gIHdpZHRoOiAzMiU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEuNHJlbTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWFpblNwYWNpbmcpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FydC1mb290ZXIgaDMge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tIEVuZCBvZiBDYXJ0IC0tLS0tLS0tLS0tLS0tLS0gKi9cbiJdfQ== */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\satish\Angular-9\AngularAssignment\EcomCart\src\styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map