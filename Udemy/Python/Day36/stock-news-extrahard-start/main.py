# ----------------------------IMPORTS---------------------------------------------------------

from operator import ne
import requests
from datetime import date, timedelta
from twilio.rest import Client

# ----------------------------CONSTANTS-------------------------------------------------------
# STOCK_API_KEY = "USXVT5YSC8K3XXAM"
# NEWS_API_KEY = "22c442f40d94485c99fdb305778c0da7"
# ACOUNT_SID = 'AC5540a076ca55d1b9f86e09e3caeb51d1'
# AUTH_TOCKEN = '8bfe34871841012925996c3e9b9690f2'
STOCK = "TSLA"
COMPANY_NAME = "Tesla"
STOCK_PARAMETERS = {
    "function": "TIME_SERIES_DAILY",
    "symbol": STOCK,
    "outputsize": "compact",
    "datatype": "json",
    "apikey": STOCK_API_KEY,

}
STOCK_URL = "https://www.alphavantage.co/query"
NEWS_URL = "https://newsapi.org/v2/top-headlines"
NEWS_PARAMETERS = {
    "q": COMPANY_NAME,
    "apiKey": NEWS_API_KEY,
    "lenguage": "en",
    # "country": "us"
}


# ----------------------------Date------------------------------------------------------------
today = date.today()
yesterday = today-timedelta(1)
today = today.strftime("%Y-%m-%d")
yesterday = yesterday.strftime("%Y-%m-%d")


# ----------------------------PHONE_MESSAGE----------------------------------------------------
def phone_message(news, delta):
    if delta > 0:
        indicator = "▲"
    else:
        indicator = "▼"
    for new in news:
        client = Client(ACOUNT_SID, AUTH_TOCKEN)
        message = client.messages.create(
            body=f"{STOCK}: {indicator}{delta}%\n{new[0]}\n{new[1]}\n{new[2]}",
            from_='+17473003187',
            to='+5214421451544'
        )
# ----------------------------NEWS_API-------------------------------------------------------


def get_news(delta):
    news_response = requests.get(url=NEWS_URL, params=NEWS_PARAMETERS)
    news_response.raise_for_status()
    news = news_response.json()["articles"]
    most_recent_news = []
    news_to_display = []
    if len(news) < 3:
        most_recent_news = news
    else:
        for i in range(0, 3):
            new_news = news[i]
            most_recent_news.append(new_news)
    for article in most_recent_news:
        title = article["title"]
        brief = article["description"]
        news_url = article["url"]
        article_content = [title, brief, news_url]
        news_to_display.append(article_content)
    phone_message(news_to_display, delta=delta)


# ----------------------------STOCK_API-------------------------------------------------------
stock_response = requests.get(url=STOCK_URL, params=STOCK_PARAMETERS)
stock_response.raise_for_status()
stocks = stock_response.json()["Time Series (Daily)"]
todays_close = float(stocks[today]["4. close"])
yesterday_close = float(stocks[yesterday]["4. close"])
delta = ((todays_close-yesterday_close)/yesterday_close)*100
delta = round(delta, 2)
if abs(delta) > 1:
    get_news(delta)
print(delta)
#     print("get news son of a bitch")
# print(todays_close, yesterday_close)
# print(delta)

# print(stocks)
# ----------------------------PROGRAM_REQUIREMENTS------------------------------------------------------

# for article in news:
#     print(article["publishedAt"])
# print(news)
# STEP 1: Use https://www.alphavantage.co
# When STOCK price increase/decreases by 5% between yesterday and the day before yesterday then print("Get News").

# STEP 2: Use https://newsapi.org
# Instead of printing ("Get News"), actually get the first 3 news pieces for the COMPANY_NAME.

# STEP 3: Use https://www.twilio.com
# Send a seperate message with the percentage change and each article's title and description to your phone number.


# Optional: Format the SMS message like this:
"""
TSLA: 🔺2%
Headline: Were Hedge Funds Right About Piling Into Tesla Inc. (TSLA)?. 
Brief: We at Insider Monkey have gone over 821 13F filings that hedge funds and prominent investors are required to file by the SEC The 13F filings show the funds' and investors' portfolio positions as of March 31st, near the height of the coronavirus market crash.
or
"TSLA: 🔻5%
Headline: Were Hedge Funds Right About Piling Into Tesla Inc. (TSLA)?. 
Brief: We at Insider Monkey have gone over 821 13F filings that hedge funds and prominent investors are required to file by the SEC The 13F filings show the funds' and investors' portfolio positions as of March 31st, near the height of the coronavirus market crash.
"""
