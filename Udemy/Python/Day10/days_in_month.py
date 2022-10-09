def leap_year(year):
    """ determina si un año es bisiesto o no
    """
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            else:
                return False
        else:
            return True
    else:
        return False

# lo siguiente se hizo para practicar el uso de diccionarios


def days_in_month(month, year):
    """ regresa el número de días en un mes revisando si el año es bisiesto o no
    """
    month_dictionary = {
        "january": 1,
        "february": 2,
        "march": 3,
        "april": 4,
        "may": 5,
        "june": 6,
        "july": 7,
        "august": 8,
        "september": 9,
        "october": 10,
        "november": 11,
        "december": 12,
    }
    month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if leap_year(year):
        month_days[1] = 29

    return month_days[(month_dictionary[month]-1)]


# 🚨 Do NOT change any of the code below
year = int(input("Enter a year: "))
month = input("Enter a month: ").lower()
days = days_in_month(year=year, month=month)
print(days)
