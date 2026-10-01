function copyText() {
        const text = document.getElementById("text-to-copy").innerText;
      
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text)
            .then(() => alert("Copied: " + text))
            .catch(err => console.error("Failed to copy: ", err));
        } else {
          // Fallback for non-secure contexts
          const ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          alert("Copied: " + text);
        }
      }
