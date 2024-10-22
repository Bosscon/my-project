        
        
        
        
        const largeModal = document.querySelector('#largeModal')
        const currencyConversion = document.querySelector('#currencyConversionlg')
        const closeModalbuttonlg = document.querySelector('#closeModalbuttonlg')
        currencyConversion.addEventListener('click', ()=>{
            largeModal.showModal();

        });

        closeModalbuttonlg.addEventListener('click', ()=> {
            largeModal.close();
        })



    
        document.getElementById('convertBtnlg').addEventListener('click', () => {
            const amount = document.getElementById('amount').value;
            const from = document.getElementById('fromCurrency').value;
            const to = document.getElementById('toCurrency').value;
            const conversionResultlg = 'conversionResultlg'
    
            const apiKey = '4652397ec0463e101f25ac39c329969c2fa8055dc63b561ad7cffef1a7996c00';
            const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${from}&tsyms=${to}&api_key=${apiKey}`;
    
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const rate = data[from][to];
                    const result = (amount * rate).toFixed(2);
                    document.getElementById('conversionResultlg').textContent = `${amount} ${from} = ${result} ${to}`;
    
                })
                .catch(error => {
                    console.error('Error fetching exchange rate:', error);
                });
    
        });










document.addEventListener('DOMContentLoaded', function () {
const mobilearkModeToggle = document.getElementById('mobilearkModeToggle');
mobilearkModeToggle.addEventListener('click', () => {
document.documentElement.classList.toggle('dark');
});
});





        const opnBtn = document.querySelector('#openDialog')
        const clsBtn = document.querySelector('#closeDialog')
        const myDia = document.querySelector('#myDialog')

        opnBtn.addEventListener('click', () => {
            myDia.showModal();

        });

        clsBtn.addEventListener('click', () => {
            myDia.close();
        });


        const hamBurger = document.getElementById('hamBurger')
        const bar = document.getElementById('bar')
    
        hamBurger.style.display = 'block';
        bar.style.display = 'none'
    
        hamBurger.addEventListener('click', () => {
            bar.style.display = bar.style.display === 'none' ? 'block' : 'none';
    
        }
        );
    
        
    
    
        
    
    
        document.getElementById('convertBtn').addEventListener('click', () => {
            const amount = document.getElementById('amount').value;
            const from = document.getElementById('fromCurrency').value;
            const to = document.getElementById('toCurrency').value;
            const conversionResult = 'conversionResult'
    
            const apiKey = '4652397ec0463e101f25ac39c329969c2fa8055dc63b561ad7cffef1a7996c00';
            const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${from}&tsyms=${to}&api_key=${apiKey}`;
    
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const rate = data[from][to];
                    const result = (amount * rate).toFixed(2);
                    document.getElementById('conversionResult').textContent = `${amount} ${from} = ${result} ${to}`;
    
                })
                .catch(error => {
                    console.error('Error fetching exchange rate:', error);
                });
    
        });
       

        
        
        const mDb = document.querySelector('#mobileDialogbutton');
        const mCc = document.querySelector('#mobileCurrencyConversion');
        const cMM = document.querySelector('#closeModalMobile');
        mCc.addEventListener('click',()=> {
            mDb.showModal();
        });
        cMM.addEventListener('click',()=> {
            mDb.close();
        });
    
    
        
        document.addEventListener('DOMContentLoaded', function () {
            
            const darkModeToggle = document.getElementById('darkModeToggle');
            darkModeToggle.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
            });
    
            
            const mobileMenuButton = document.getElementById('mobileMenuButton');
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
    
           
            fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
                .then(response => response.json())
                .then(data => {
                    const tableBody = document.getElementById('cryptoTableBody');
                    data.forEach(coin => {
                        const row = `
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <img class="h-8 w-8 rounded-full" src="${coin.image}" alt="${coin.name}">
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900 dark:text-white">${coin.name}</div>
                                                <div class="text-sm text-gray-500 dark:text-gray-400">${coin.symbol.toUpperCase()}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900 dark:text-white">$${coin.current_price.toLocaleString()}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${coin.price_change_percentage_24h > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }">
                                            ${coin.price_change_percentage_24h.toFixed(2)}%
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                        $${coin.market_cap.toLocaleString()}
                                    </td>
                                </tr>
                            `;
                        tableBody.innerHTML += row;
                    });
    
                   
                    updateTopMovers(data);
    
                    
                    updateMarketTrendsChart(data);
                })
                .catch(error => console.error('Error fetching crypto data:', error));
    
           
            fetchCryptoNews();
    
            
            const aiChatInput = document.getElementById('aiChatInput');
            const aiChatSubmit = document.getElementById('aiChatSubmit');
            const aiChatContainer = document.getElementById('aiChatContainer');
    
            aiChatSubmit.addEventListener('click', () => {
                const userMessage = aiChatInput.value.trim();
                if (userMessage) {
                    addMessageToChat('user', userMessage);
                    aiChatInput.value = '';
                    
                    setTimeout(() => {
                        const aiResponse = simulateAIResponse(userMessage);
                        addMessageToChat('ai', aiResponse);
                    }, 1000);
                }
            });
    
            function addMessageToChat(sender, message) {
                const messageElement = document.createElement('div');
                messageElement.classList.add('mb-2', 'p-2', 'rounded-lg', sender === 'user' ? 'bg-primary-100 text-right' : 'bg-gray-200 dark:bg-gray-600');
                messageElement.textContent = message;
                aiChatContainer.appendChild(messageElement);
                aiChatContainer.scrollTop = aiChatContainer.scrollHeight;
            }
    
            function simulateAIResponse(userMessage) {
                
                const responses = [
                    "Bitcoin is the first and most well-known cryptocurrency.",
                    "Ethereum introduced the concept of smart contracts to blockchain technology.",
                    "The total market capitalization of all cryptocurrencies exceeded $1 trillion in 2021.",
                    "Cryptocurrency transactions are recorded on a distributed ledger called a blockchain.",
                    "Many countries are exploring the possibility of creating their own central bank digital currencies (CBDCs)."
                ];
                return responses[Math.floor(Math.random() * responses.length)];
            }
        });
    
    
        const newsContainer = document.getElementById('newsContainer');
        function fetchCryptoNews() {
            fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN') 
                .then(response => response.json())
                .then(data => {
                    const newsArticles = data.Data; 
                    newsContainer.innerHTML = ''; 
    
                    newsArticles.forEach(article => {
                        const newsItem = `
              <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h2 class="text-4xl font-bold text-center mb-4 text-primary-600 dark:text-primary-400">Cryptocurrency News</h1>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${article.title}</h3>
                <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">${article.body.substring(0, 150)}...</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Source: ${article.source} - ${article.published_on}</p>
              </div>
            `;
                        newsContainer.innerHTML += newsItem;
                    });
                })
                .catch(error => {
                    console.error('Error fetching news:', error);
                    newsContainer.textContent = 'Error fetching news';
                });
        }
    
        fetchCryptoNews(); // Call the function to fetch news on page load
    
    
    
        function updateTopMovers(data) {
            const topGainers = data.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 5);
            const topLosers = data.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h).slice(0, 5);
    
            const topGainersList = document.getElementById('topGainersList');
            const topLosersList = document.getElementById('topLosersList');
    
            topGainers.forEach(coin => {
                topGainersList.innerHTML += `
                        <li class="flex justify-between items-center">
                            <span>${coin.symbol.toUpperCase()}</span>
                            <span class="text-green-500">+${coin.price_change_percentage_24h.toFixed(2)}%</span>
                        </li>
                    `;
            });
    
            topLosers.forEach(coin => {
                topLosersList.innerHTML += `
                        <li class="flex justify-between items-center">
                            <span>${coin.symbol.toUpperCase()}</span>
                            <span class="text-red-500">${coin.price_change_percentage_24h.toFixed(2)}%</span>
                        </li>
                    `;
            });
        }
    
        function updateMarketTrendsChart(data) {
            const ctx = document.getElementById('marketTrendsChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(coin => coin.symbol.toUpperCase()),
                    datasets: [{
                        label: 'Price (USD)',
                        data: data.map(coin => coin.current_price),
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        };
    
    
    
    
    
    

