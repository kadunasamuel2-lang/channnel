/**
         * Dynamic Fallback Generation Engine
         * Automatically creates a clean colored visual placeholder if local product images are absent.
         */
        function showFallback(imageElement, label) {
            imageElement.onerror = null; 
            imageElement.style.display = 'none';
            const parent = imageElement.parentNode;
            
            const placeholder = document.createElement('div');
            placeholder.style.position = 'absolute';
            placeholder.style.top = '0';
            placeholder.style.left = '0';
            placeholder.style.width = '100%';
            placeholder.style.height = '100%';
            placeholder.style.background = 'linear-gradient(135deg, #171a26 0%, #0d0f16 100%)';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.color = '#737b94';
            placeholder.style.fontFamily = 'monospace';
            placeholder.style.fontSize = '0.8rem';
            placeholder.style.fontWeight = 'bold';
            placeholder.style.border = '1px solid #24293a';
            placeholder.style.borderRadius = '12px 12px 0 0';
            placeholder.style.textAlign = 'center';
            placeholder.style.padding = '15px';
            placeholder.innerHTML = `[ ${label} ]<br><span style="font-size:0.65rem; color:#4b5162; margin-top:5px; display:block;">image pending</span>`;
            
            parent.appendChild(placeholder);
        }

        /**
         * Client Side Routing Engine
         */
        const routes = {
            'home': 'view-home',
            'tech': 'view-tech',
            'toys': 'view-toys',
            'books': 'view-books',
            'forex': 'view-forex',
            'booking': 'view-booking',
            'about': 'view-about',
            'account': 'view-account'
        };

        function routePage() {
            let hash = window.location.hash.substring(1);
            if (!hash || !routes[hash]) {
                hash = 'home';
            }

            document.querySelectorAll('.page-view').forEach(view => {
                view.classList.remove('active-view');
            });

            const targetViewId = routes[hash];
            const targetView = document.getElementById(targetViewId);
            if (targetView) {
                targetView.classList.add('active-view');
            }

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-page') === hash) {
                    link.classList.add('active');
                }
            });

            window.scrollTo({ top: 0, behavior: 'instant' });
        }

        window.addEventListener('hashchange', routePage);
        window.addEventListener('load', routePage);

        /**
         * Variable Lead Storage
         */
        let currentLeadPayload = null;
        let currentSubscriberPayload = null;

        /**
         * Booking Action Processor
         */
        function handleBooking(event) {
            event.preventDefault();

            // Extract inputs safely
            const name = document.getElementById('clientName').value.trim();
            const email = document.getElementById('clientEmail').value.trim();
            const phone = document.getElementById('clientPhone').value.trim();
            const brand = document.getElementById('brandName').value.trim();
            const packageTier = document.getElementById('packageSelect').value;
            const timeline = document.getElementById('projectTimeline').value;
            const competitor = document.getElementById('competitorSite').value.trim() || 'Not Provided';
            const brief = document.getElementById('clientBrief').value.trim();

            // Compile clean, structural data presentation
            currentLeadPayload = 
`--- WEBCRAFT CLIENT BRIEF ---
👤 Client Name: ${name}
📧 Email Address: ${email}
📱 WhatsApp/Phone: ${phone}
🏢 Company Name: ${brand}
📦 Selected Package: ${packageTier}
⏱️ Timeline Parameter: ${timeline}
🔗 Design Reference: ${competitor}
📝 Functional Requirements:
"${brief}"
-----------------------------------`;

            // Transition UI views
            document.getElementById('bookingForm').style.display = 'none';
            document.getElementById('bookingSuccess').style.display = 'block';
        }

        /**
         * Real-Time Dispatch Router
         */
        function dispatchToChannel(channel) {
            if (!currentLeadPayload) return;

            const encodedMessage = encodeURIComponent(currentLeadPayload);

            if (channel === 'whatsapp') {
                const whatsappURL = `https://wa.me/2349068759598?text=${encodedMessage}`;
                window.open(whatsappURL, '_blank');
            } else if (channel === 'telegram') {
                // Generates direct communication deep link format
                const telegramURL = `https://t.me/oche8968?text=${encodedMessage}`;
                window.open(telegramURL, '_blank');
            }
        }

        function restartBooking() {
            document.getElementById('bookingForm').style.display = 'block';
            document.getElementById('bookingSuccess').style.display = 'none';
        }

        /**
         * Newsletter / Account Registration logic
         */
        function handleAccountActivation(event) {
            event.preventDefault();

            const subscriberName = document.getElementById('subscriberName').value.trim();
            const subscriberEmail = document.getElementById('subscriberEmail').value.trim();

            currentSubscriberPayload = 
`--- COUPLING SUBSCRIBER REGISTRATION ---
👤 Name: ${subscriberName}
📧 Email: ${subscriberEmail}
🔑 Requesting: Vault Discount Codes & System Bulletins
------------------------------------------`;

            document.getElementById('newsletterForm').style.display = 'none';
            document.getElementById('accountSuccess').style.display = 'block';
        }

        function dispatchSubscriber(channel) {
            if (!currentSubscriberPayload) return;

            const encodedMessage = encodeURIComponent(currentSubscriberPayload);

            if (channel === 'whatsapp') {
                const whatsappURL = `https://wa.me/2349068759598?text=${encodedMessage}`;
                window.open(whatsappURL, '_blank');
            } else if (channel === 'telegram') {
                const telegramURL = `https://t.me/oche8968?text=${encodedMessage}`;
                window.open(telegramURL, '_blank');
            }
        }

        function resetAccountForm() {
            document.getElementById('newsletterForm').reset();
            document.getElementById('newsletterForm').style.display = 'block';
            document.getElementById('accountSuccess').style.display = 'none';
            currentSubscriberPayload = null;
        }