class SiteFooter extends HTMLElement {
    async connectedCallback() {
        const res = await fetch('/footer.html');
        this.innerHTML = await res.text();
    }
}
customElements.define('my-footer', SiteFooter);