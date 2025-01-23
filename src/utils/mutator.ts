import { DateTime } from "luxon";

export const objectToQueryUrl = (params: Record<string, any>) => {
    const queryPharams: Array<any> = [];
    try {
        Object.keys(params).forEach((res) => {
            if (params[res]) {
                queryPharams.push(encodeURIComponent(res) + "=" + encodeURIComponent(params[res]));
            }
        })
    } catch (error) { }
    return queryPharams.join("&")
}


export function formatValueInputDate(date: any) {
    return DateTime.fromJSDate(new Date(date)).toFormat('yyyy-MM-dd')
}


export function getHoroscope(birthDate: any) {
    const date = new Date(birthDate)
    const monthDate = new Date(`${date.getMonth() + 1}-${date.getDate()}`)

    if (new Date('03-21') <= monthDate && monthDate <= new Date('04-19')) {
        return 'Aries';
    } else if (new Date('04-20') <= monthDate && monthDate <= new Date('05-20')) {
        return 'Taurus';
    } else if (new Date('05-21') <= monthDate && monthDate <= new Date('06-21')) {
        return 'Gemini';
    } else if (new Date('06-22') <= monthDate && monthDate <= new Date('07-22')) {
        return 'Cancer';
    } else if (new Date('07-23') <= monthDate && monthDate <= new Date('08-22')) {
        return 'Leo';
    } else if (new Date('08-23') <= monthDate && monthDate <= new Date('09-22')) {
        return 'Virgo';
    } else if (new Date('09-23') <= monthDate && monthDate <= new Date('10-23')) {
        return 'Libra';
    } else if (new Date('10-24') <= monthDate && monthDate <= new Date('11-21')) {
        return 'Scorpius';
    } else if (new Date('11-22') <= monthDate && monthDate <= new Date('12-21')) {
        return 'Sagittarius';
    } else if (new Date('12-22') <= monthDate && monthDate <= new Date('01-19')) {
        return 'Capricornus';
    } else if (new Date('01-20') <= monthDate && monthDate <= new Date('02-18')) {
        return 'Aquarius';
    } else if (new Date('02-19') <= monthDate && monthDate <= new Date('03-20')) {
        return 'Pisces';
    } else {
        return {}
    }
}


export function getDetailHoroscope(horoscope: string) {
    const detailHoroscopes: Record<string, {
        emote: string; name: string;
    }> = {
        'aries': { emote: '♈', name: 'Ram' },
        'taurus': { emote: '♉', name: 'Bull' },
        'gemini': { emote: '♊', name: 'Twins' },
        'cancer': { emote: '♋', name: 'Crab' },
        'leo': { emote: '♌', name: 'Lion' },
        'virgo': { emote: '♍', name: 'Virgin' },
        'libra': { emote: '♎', name: 'Balance' },
        'scorpius': { emote: '♏', name: 'Scorpion' },
        'sagittarius': { emote: '♐', name: 'Archer' },
        'capricornus': { emote: '♑', name: 'Goat' },
        'aquarius': { emote: '♒', name: 'Water Bea' },
        'pisces': { emote: '♓', name: 'Fish' }
    }
    return detailHoroscopes[horoscope.toLowerCase()];
}


export function getZodiac(birthDate: any) {
    const date = new Date(birthDate);
    if (new Date('2023 January 22') <= date && date <= new Date('2024 February 9')) {
        return 'Rabbit'
    } else if (new Date('2022 February 1') <= date && date <= new Date('2023 January 21')) {
        return 'Tiger'
    } else if (new Date('2021 February 12') <= date && date <= new Date('2022 January 31')) {
        return 'Ox'
    } else if (new Date('2020 January 25') <= date && date <= new Date('2021 February 11')) {
        return 'Rat'
    } else if (new Date('2019 February 5') <= date && date <= new Date('2020 January 24')) {
        return 'Pig'
    } else if (new Date('2018 February 16') <= date && date <= new Date('2019 February 4')) {
        return 'Dog'
    } else if (new Date('2017 January 28') <= date && date <= new Date('2018 February 15')) {
        return 'Rooster'
    } else if (new Date('2016 February 8') <= date && date <= new Date('2017 January 27')) {
        return 'Monkey'
    } else if (new Date('2015 February 19') <= date && date <= new Date('2016 February 7')) {
        return 'Goat'
    } else if (new Date('2014 January 31') <= date && date <= new Date('2015 February 18')) {
        return 'Horse'
    } else if (new Date('2013 February 10') <= date && date <= new Date('2014 January 30')) {
        return 'Snake'
    } else if (new Date('2012 January 23') <= date && date <= new Date('2013 February 9')) {
        return 'Dragon'
    } else if (new Date('2011 February 3') <= date && date <= new Date('2012 January 22')) {
        return 'Rabbit'
    } else if (new Date('2010 February 14') <= date && date <= new Date('2011 February 2')) {
        return 'Tiger'
    } else if (new Date('2009 January 26') <= date && date <= new Date('2010 February 13')) {
        return 'Ox'
    } else if (new Date('2008 February 7') <= date && date <= new Date('2009 January 25')) {
        return 'Rat'
    } else if (new Date('2007 February 18') <= date && date <= new Date('2008 February 6')) {
        return 'Boar'
    } else if (new Date('2006 January 29') <= date && date <= new Date('2007 February 17')) {
        return 'Dog'
    } else if (new Date('2005 February 9') <= date && date <= new Date('2006 January 28')) {
        return 'Rooster'
    } else if (new Date('2004 January 22') <= date && date <= new Date('2005 February 8')) {
        return 'Monkey'
    } else if (new Date('2003 February 1') <= date && date <= new Date('2004 January 21')) {
        return 'Goat'
    } else if (new Date('2002 February 12') <= date && date <= new Date('2003 January 31')) {
        return 'Horse'
    } else if (new Date('2001 January 24') <= date && date <= new Date('2002 February 11')) {
        return 'Snake'
    } else if (new Date('2000 February 5') <= date && date <= new Date('2001 January 23')) {
        return 'Dragon'
    } else if (new Date('1999 February 16') <= date && date <= new Date('2000 February 4')) {
        return 'Rabbit'
    } else if (new Date('1998 January 28') <= date && date <= new Date('1999 February 15')) {
        return 'Tiger'
    } else if (new Date('1997 February 7') <= date && date <= new Date('1998 January 27')) {
        return 'Ox'
    } else if (new Date('1996 February 19') <= date && date <= new Date('1997 February 6')) {
        return 'Rat'
    } else if (new Date('1995 January 31') <= date && date <= new Date('1996 February 18')) {
        return 'Boar'
    } else if (new Date('1994 February 10') <= date && date <= new Date('1995 January 30')) {
        return 'Dog'
    } else if (new Date('1993 January 23') <= date && date <= new Date('1994 February 9')) {
        return 'Rooster'
    } else if (new Date('1992 February 4') <= date && date <= new Date('1993 January 22')) {
        return 'Monkey'
    } else if (new Date('1991 February 15') <= date && date <= new Date('1992 February 3')) {
        return 'Goat'
    } else if (new Date('1990 January 27') <= date && date <= new Date('1991 February 14')) {
        return 'Horse'
    } else if (new Date('1989 February 6') <= date && date <= new Date('1990 January 26')) {
        return 'Snake'
    } else if (new Date('1988 February 17') <= date && date <= new Date('1989 February 5')) {
        return 'Dragon'
    } else if (new Date('1987 January 29') <= date && date <= new Date('1988 February 16')) {
        return 'Rabbit'
    } else if (new Date('1986 February 9') <= date && date <= new Date('1987 January 28')) {
        return 'Tiger'
    } else if (new Date('1985 February 20') <= date && date <= new Date('1986 February 8')) {
        return 'Ox'
    } else if (new Date('1984 February 2') <= date && date <= new Date('1985 February 19')) {
        return 'Rat'
    } else if (new Date('1983 February 13') <= date && date <= new Date('1984 February 1')) {
        return 'Boar'
    } else if (new Date('1982 January 25') <= date && date <= new Date('1983 February 12')) {
        return 'Dog'
    } else if (new Date('1981 February 5') <= date && date <= new Date('1982 January 24')) {
        return 'Rooster'
    } else if (new Date('1980 February 16') <= date && date <= new Date('1981 February 4')) {
        return 'Monkey'
    } else if (new Date('1979 January 28') <= date && date <= new Date('1980 February 15')) {
        return 'Goat'
    } else if (new Date('1978 February 7') <= date && date <= new Date('1979 January 27')) {
        return 'Horse'
    } else if (new Date('1977 February 18') <= date && date <= new Date('1978 February 6')) {
        return 'Snake'
    } else if (new Date('1976 January 31') <= date && date <= new Date('1977 February 17')) {
        return 'Dragon'
    } else if (new Date('1975 February 11') <= date && date <= new Date('1976 January 30')) {
        return 'Rabbit'
    } else if (new Date('1974 January 23') <= date && date <= new Date('1975 February 10')) {
        return 'Tiger'
    } else if (new Date('1973 February 3') <= date && date <= new Date('1974 January 22')) {
        return 'Ox'
    } else if (new Date('1972 January 16') <= date && date <= new Date('1973 February 2')) {
        return 'Rat'
    } else if (new Date('1971 January 27') <= date && date <= new Date('1972 January 15')) {
        return 'Boar'
    } else if (new Date('1970 February 6') <= date && date <= new Date('1971 January 26')) {
        return 'Dog'
    } else if (new Date('1969 February 17') <= date && date <= new Date('1970 February 5')) {
        return 'Rooster'
    } else if (new Date('1968 January 30') <= date && date <= new Date('1969 February 16')) {
        return 'Monkey'
    } else if (new Date('1967 February 9') <= date && date <= new Date('1968 January 29')) {
        return 'Goat'
    } else if (new Date('1966 January 21') <= date && date <= new Date('1967 February 8')) {
        return 'Horse'
    } else if (new Date('1965 February 2') <= date && date <= new Date('1966 January 20')) {
        return 'Snake'
    } else if (new Date('1964 February 13') <= date && date <= new Date('1965 February 1')) {
        return 'Dragon'
    } else if (new Date('1963 January 25') <= date && date <= new Date('1964 February 12')) {
        return 'Rabbit'
    } else if (new Date('1962 February 5') <= date && date <= new Date('1963 January 24')) {
        return 'Tiger'
    } else if (new Date('1961 February 15') <= date && date <= new Date('1962 February 4')) {
        return 'Ox'
    } else if (new Date('1960 January 28') <= date && date <= new Date('1961 February 14')) {
        return 'Rat'
    } else if (new Date('1959 February 8') <= date && date <= new Date('1960 January 27')) {
        return 'Boar'
    } else if (new Date('1958 February 18') <= date && date <= new Date('1959 February 7')) {
        return 'Dog'
    } else if (new Date('1957 January 31') <= date && date <= new Date('1958 February 17')) {
        return 'Rooster'
    } else if (new Date('1956 February 12') <= date && date <= new Date('1957 January 30')) {
        return 'Monkey'
    } else if (new Date('1955 January 24') <= date && date <= new Date('1956 February 11')) {
        return 'Goat'
    } else if (new Date('1954 February 3') <= date && date <= new Date('1955 January 23')) {
        return 'Horse'
    } else if (new Date('1953 February 14') <= date && date <= new Date('1954 February 2')) {
        return 'Snake'
    } else if (new Date('1952 January 27') <= date && date <= new Date('1953 February 13')) {
        return 'Dragon'
    } else if (new Date('1951 February 6') <= date && date <= new Date('1952 January 26')) {
        return 'Rabbit'
    } else if (new Date('1950 February 17') <= date && date <= new Date('1951 February 5')) {
        return 'Tiger'
    } else if (new Date('1949 January 29') <= date && date <= new Date('1950 February 16')) {
        return 'Ox'
    } else if (new Date('1948 February 10') <= date && date <= new Date('1949 January 28')) {
        return 'Rat'
    } else if (new Date('1947 January 22') <= date && date <= new Date('1948 February 9')) {
        return 'Boar'
    } else if (new Date('1946 February 2') <= date && date <= new Date('1947 January 21')) {
        return 'Dog'
    } else if (new Date('1945 February 13') <= date && date <= new Date('1946 February 1')) {
        return 'Rooster'
    } else if (new Date('1944 January 25') <= date && date <= new Date('1945 February 12')) {
        return 'Monkey'
    } else if (new Date('1943 February 5') <= date && date <= new Date('1944 January 24')) {
        return 'Goat'
    } else if (new Date('1942 February 15') <= date && date <= new Date('1943 February 4')) {
        return 'Horse'
    } else if (new Date('1941 January 27') <= date && date <= new Date('1942 February 14')) {
        return 'Snake'
    } else if (new Date('1940 February 8') <= date && date <= new Date('1941 January 26')) {
        return 'Dragon'
    } else if (new Date('1939 February 19') <= date && date <= new Date('1940 February 7')) {
        return 'Rabbit'
    } else if (new Date('1938 January 31') <= date && date <= new Date('1939 February 18')) {
        return 'Tiger'
    } else if (new Date('1937 February 11') <= date && date <= new Date('1938 January 30')) {
        return 'Ox'
    } else if (new Date('1936 January 24') <= date && date <= new Date('1937 February 10')) {
        return 'Rat'
    } else if (new Date('1935 February 4') <= date && date <= new Date('1936 January 23')) {
        return 'Boar'
    } else if (new Date('1934 February 14') <= date && date <= new Date('1935 February 3')) {
        return 'Dog'
    } else if (new Date('1933 January 26') <= date && date <= new Date('1934 February 13')) {
        return 'Rooster'
    } else if (new Date('1932 February 6') <= date && date <= new Date('1933 January 25')) {
        return 'Monkey'
    } else if (new Date('1931 February 17') <= date && date <= new Date('1932 February 5')) {
        return 'Goat'
    } else if (new Date('1930 January 30') <= date && date <= new Date('1931 February 16')) {
        return 'Horse'
    } else if (new Date('1929 February 10') <= date && date <= new Date('1930 January 29')) {
        return 'Snake'
    } else if (new Date('1928 January 23') <= date && date <= new Date('1929 February 9')) {
        return 'Dragon'
    } else if (new Date('1927 February 2') <= date && date <= new Date('1928 January 22')) {
        return 'Rabbit'
    } else if (new Date('1926 Februry 13') <= date && date <= new Date('1927 February 1')) {
        return 'Tiger'
    } else if (new Date('1925 January 25') <= date && date <= new Date('1926 February 12')) {
        return 'Ox'
    } else if (new Date('1924 February 5') <= date && date <= new Date('1925 January 24')) {
        return 'Rat'
    } else if (new Date('1923 February 16') <= date && date <= new Date('1924 February 4')) {
        return 'Boar'
    } else if (new Date('1922 January 28') <= date && date <= new Date('1923 February 15')) {
        return 'Dog'
    } else if (new Date('1921 February 8') <= date && date <= new Date('1922 January 27')) {
        return 'Rooster'
    } else if (new Date('1920 February 20') <= date && date <= new Date('1921 February 7')) {
        return 'Monkey'
    } else if (new Date('1919 February 1') <= date && date <= new Date('1920 February 19')) {
        return 'Goat'
    } else if (new Date('1918 February 11') <= date && date <= new Date('1919 January 31')) {
        return 'Horse'
    } else if (new Date('1917 January 23') <= date && date <= new Date('1918 February 10')) {
        return 'Snake'
    } else if (new Date('1916 February 3') <= date && date <= new Date('1917 January 22')) {
        return 'Dragon'
    } else if (new Date('1915 February 14') <= date && date <= new Date('1916 February 2')) {
        return 'Rabbit'
    } else if (new Date('1914 January 26') <= date && date <= new Date('1915 February 13')) {
        return 'Tiger'
    } else if (new Date('1913 February 6') <= date && date <= new Date('1914 January 25')) {
        return 'Ox'
    } else if (new Date('1912 February 18') <= date && date <= new Date('1913 February 5')) {
        return 'Rat'
    } else {
        return '-'
    }
}