
        // // JavaScript for functionality
        // document.addEventListener('DOMContentLoaded', function() {
        //     // Dark mode toggle
        //     const darkModeToggle = document.getElementById('darkModeToggle');
        //     darkModeToggle.addEventListener('click', () => {
        //         document.documentElement.classList.toggle('dark');
        //     });

        //     // Mobile menu toggle
        //     const mobileMenuButton = document.getElementById('mobileMenuButton');
        //     const mobileMenu = document.getElementById('mobileMenu');
        //     mobileMenuButton.addEventListener('click', () => {
        //         mobileMenu.classList.toggle('hidden');
        //     });

        //     // Fetch and display crypto data
        //     fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        //         .then(response => response.json())
        //         .then(data => {
        //             const tableBody = document.getElementById('cryptoTableBody');
        //             data.forEach(coin => {
        //                 const row = `
        //                     <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
        //                         <td class="px-6 py-4 whitespace-nowrap">
        //                             <div class="flex items-center">
        //                                 <img class="h-8 w-8 rounded-full" src="${coin.image}" alt="${coin.name}">
        //                                 <div class="ml-4">
        //                                     <div class="text-sm font-medium text-gray-900 dark:text-white">${coin.name}</div>
        //                                     <div class="text-sm text-gray-500 dark:text-gray-400">${coin.symbol.toUpperCase()}</div>
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td class="px-6 py-4 whitespace-nowrap">
        //                             <div class="text-sm text-gray-900 dark:text-white">$${coin.current_price.toLocaleString()}</div>
        //                         </td>
        //                         <td class="px-6 py-4 whitespace-nowrap">
        //                             <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
        //                                 coin.price_change_percentage_24h > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        //                             }">
        //                                 ${coin.price_change_percentage_24h.toFixed(2)}%
        //                             </span>
        //                         </td>
        //                         <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        //                             $${coin.market_cap.toLocaleString()}
        //                         </td>
        //                     </tr>
        //                 `;
        //                 tableBody.innerHTML += row;
        //             });

        //             // Update top gainers and losers
        //             updateTopMovers(data);

        //             // Update market trends chart
        //             updateMarketTrendsChart(data);
        //         })
        //         .catch(error => console.error('Error fetching crypto data:', error));

        //     // Fetch and display news
        //     fetchCryptoNews();

        //     // AI Chat functionality
        //     const aiChatInput = document.getElementById('aiChatInput');
        //     const aiChatSubmit = document.getElementById('aiChatSubmit');
        //     const aiChatContainer = document.getElementById('aiChatContainer');

        //     aiChatSubmit.addEventListener('click', () => {
        //         const userMessage = aiChatInput.value.trim();
        //         if (userMessage) {
        //             addMessageToChat('user', userMessage);
        //             aiChatInput.value = '';
        //             // Simulate AI response (replace with actual API call in production)
        //             setTimeout(() => {
        //                 const aiResponse = simulateAIResponse(userMessage);
        //                 addMessageToChat('ai', aiResponse);
        //             }, 1000);
        //         }
        //     });

        //     function addMessageToChat(sender, message) {
        //         const messageElement = document.createElement('div');
        //         messageElement.classList.add('mb-2', 'p-2', 'rounded-lg', sender === 'user' ? 'bg-primary-100 text-right' : 'bg-gray-200 dark:bg-gray-600');
        //         messageElement.textContent = message;
        //         aiChatContainer.appendChild(messageElement);
        //         aiChatContainer.scrollTop = aiChatContainer.scrollHeight;
        //     }

        //     function simulateAIResponse(userMessage) {
        //         // This is a placeholder. In a real application, you would call an AI API here.
        //         const responses = [
        //             "Bitcoin is the first and most well-known cryptocurrency.",
        //             "Ethereum introduced the concept of smart contracts to blockchain technology.",
        //             "The total market capitalization of all cryptocurrencies exceeded $1 trillion in 2021.",
        //             "Cryptocurrency transactions are recorded on a distributed ledger called a blockchain.",
        //             "Many countries are exploring the possibility of creating their own central bank digital currencies (CBDCs)."
        //         ];
        //         return responses[Math.floor(Math.random() * responses.length)];
        //     }
        // });

        // function fetchCryptoNews() {
        //     // Since the NewsAPI doesn't work on the client-side due to CORS, we'll use a placeholder for now
        //     const placeholderNews = [
        //         { title: "Bitcoin Surges Past $50,000", description: "The world's largest cryptocurrency by market value has seen a significant price increase.", source: { name: "CryptoNews" } },
        //         { title: "Ethereum 2.0 Upgrade: What You Need to Know", description: "The long-awaited upgrade aims to improve scalability and reduce energy consumption.", source: { name: "BlockchainToday" } },
        //         { title: "Regulatory Challenges Facing Cryptocurrency in 2023", description: "Governments worldwide are grappling with how to regulate the rapidly evolving crypto market.", source: { name: "CoinDesk" } },
        //         { title: "DeFi Platforms See Record Growth in Q2", description: "Decentralized finance continues to attract users and capital at an unprecedented rate.", source: { name: "DeFiPulse" } }
        //     ];

        //     const newsContainer = document.getElementById('newsContainer');
        //     placeholderNews.forEach(article => {
        //         const newsItem = `
        //             <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
        //                 <h3 class="font-semibold text-lg mb-2">${article.title}</h3>
        //                 <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">${article.description}</p>
        //                 <p class="text-sm text-gray-600 dark:text-gray-300">Source: ${article.source.name}</p>
        //             </div>
        //         `;
        //         newsContainer.innerHTML += newsItem;
        //     });
        // }

        // function updateTopMovers(data) {
        //     const topGainers = data.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 5);
        //     const topLosers = data.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h).slice(0, 5);

        //     const topGainersList = document.getElementById('topGainersList');
        //     const topLosersList = document.getElementById('topLosersList');

        //     topGainers.forEach(coin => {
        //         topGainersList.innerHTML += `
        //             <li class="flex justify-between items-center">
        //                 <span>${coin.symbol.toUpperCase()}</span>
        //                 <span class="text-green-500">+${coin.price_change_percentage_24h.toFixed(2)}%</span>
        //             </li>
        //         `;
        //     });

        //     topLosers.forEach(coin => {
        //         topLosersList.innerHTML += `
        //             <li class="flex justify-between items-center">
        //                 <span>${coin.symbol.toUpperCase()}</span>
        //                 <span class="text-red-500">${coin.price_change_percentage_24h.toFixed(2)}%</span>
        //             </li>
        //         `;
        //     });
        // }

        // function updateMarketTrendsChart(data) {
        //     const ctx = document.getElementById('marketTrendsChart').getContext('2d');
        //     new Chart(ctx, {
        //         type: 'line',
        //         data: {
        //             labels: data.map(coin => coin.symbol.toUpperCase()),
        //             datasets: [{
        //                 label: 'Price (USD)',
        //                 data: data.map(coin => coin.current_price),
        //                 borderColor: 'rgb(75, 192, 192)',
        //                 tension: 0.1
        //             }]
        //         },
        //         options: {
        //             responsive: true,
        //             maintainAspectRatio: false,
        //             scales: {
        //                 y: {
        //                     beginAtZero: false
        //                 }
        //             }
        //         }
        //     });
        // }
   

        import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize GoogleGenerativeAI Client
const genAI = new GoogleGenerativeAI('AIzaSyCLrdIIaESx1s2Pyb5dz5V694B34na7L00');

// Store messages
const messages = [];

// Get references to DOM elements
const messageContainer = document.querySelector('.chatDiv');
const inputElement = document.getElementById('input');
const sendButton = document.getElementById('sendButton');

// Send button click event
sendButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    const userInput = inputElement.value;
    if (userInput.trim() === '') return;  // Prevent empty input

    // Add user message to messages array
    messages.push({ Ai: false, content: userInput });

    // Clear input field
    inputElement.value = '';

    // Render the new message
    renderMessages();

    // Call AI to get a response
    askAi(userInput);
});

// Function to call AI and get a response
async function askAi(userInput) {
    const prompt = "You are a slang explainer AI. Answer the following question: " + userInput;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent([prompt]);
        const answer = result.response.text();

        // Add AI response to messages array
        messages.push({ Ai: true, content: answer });

        // Render the new message
        renderMessages();
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

// Function to render messages
function renderMessages() {
    messageContainer.innerHTML = ''; // Clear the current content

    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('flex', 'items-start','mb-2');

        // Create different styling for user and AI messages
        if (message.Ai) {
            messageElement.classList.add('justify-end');
            messageElement.innerHTML = `
                <div class="bg-blue-500 text-white rounded-lg p-2 max-w-xs">
                    <p class="text-sm mb-2">${message.content}</p>
                </div>
            `;
        } else {
            messageElement.innerHTML = `
                <div class="bg-gray-200 rounded-lg p-2 max-w-xs">
                    <p class="text-sm mb-2">${message.content}</p>
                </div>
            `;
        }

        // Append message to the message container
        messageContainer.appendChild(messageElement);
    });

    // Scroll to the bottom of the chat container
    messageContainer.parentElement.scrollTop = messageContainer.parentElement.scrollHeight;
}
