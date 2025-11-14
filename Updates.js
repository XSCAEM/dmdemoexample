function updateRenditions() {
        const base = document.getElementById("baseInput").value.trim();
        if (!base) return;

        // Construct rendition URLs
        const flip = base + "?$FlipVertical$";
        const gray = base + "?$Grayscale$";

        // Update images
        document.getElementById("baseImg").src = base;
        document.getElementById("flipImg").src = flip;
        document.getElementById("grayImg").src = gray;

        // Update URL text display
        document.getElementById("baseUrl").textContent = base;
        document.getElementById("flipUrl").textContent = flip;
        document.getElementById("grayUrl").textContent = gray;
      }
