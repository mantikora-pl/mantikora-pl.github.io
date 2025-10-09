
export interface CodeName {
    code: string;
    name: string;
}

const COUNTRIES: CodeName[] = [
    { code: "AR", name: "Argentina" },
    { code: "AT", name: "Austria" },
    { code: "AU", name: "Australia" },
    { code: "BE", name: "Belgium" },
    { code: "BG", name: "Bulgaria" },
    { code: "BR", name: "Brazil" },
    { code: "CA", name: "Canada" },
    { code: "CL", name: "Chile" },
    { code: "CO", name: "Colombia" },
    { code: "CZ", name: "Czech Republic" },
    { code: "DK", name: "Denmark" },
    { code: "EE", name: "Estonia" },
    { code: "FI", name: "Finland" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
    { code: "GR", name: "Greece" },
    { code: "HU", name: "Hungary" },
    { code: "IE", name: "Ireland" },
    { code: "IT", name: "Italy" },
    { code: "LT", name: "Lithuania" },
    { code: "LU", name: "Luxembourg" },
    { code: "MT", name: "Malta" },
    { code: "MX", name: "Mexico" },
    { code: "NL", name: "Netherlands" },
    { code: "NO", name: "Norway" },
    { code: "NZ", name: "New Zealand" },
    { code: "PE", name: "Peru" },
    { code: "PL", name: "Poland" },
    { code: "PT", name: "Portugal" },
    { code: "PY", name: "Paraguay" },
    { code: "RO", name: "Romania" },
    { code: "SE", name: "Sweden" },
    { code: "CH", name: "Switzerland" },
    { code: "UY", name: "Uruguay" },
    { code: "VE", name: "Venezuela" },
    { code: "JP", name: "Japan" },
    { code: "KR", name: "South Korea" },
    { code: "US", name: "United States" },
    { code: "GB", name: "United Kingdom" }
];
/**
 * @code is 2-letter code in ISO 3166-1 alpha-2
 * **/
export function codeToCountry(code: string) {
    return COUNTRIES.find(country => country.code.toUpperCase() === code.toUpperCase())?.name;
}

/**
 * returns 2-letter code in ISO 3166-1 alpha-2
 * **/
export function countryToCode(forCountry: string) {
    return COUNTRIES.find(country => country.name.toUpperCase() === forCountry.toUpperCase())?.code;
}

export interface StateCodes {
    code: string;
    name: string;
    countryCode?: string; //in case we'll need Brazil / Mexico state codes too
}

export const US_STATES: StateCodes[] = [
    { code: "AL", name: "Alabama",},
    { code: "AK", name: "Alaska", },
    { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" },
    { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" },
    { code: "DE", name: "Delaware" },
    { code: "DC", name: "District Of Columbia" },
    { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" },
    { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" },
    { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" },
    { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" },
    { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" },
    { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" },
    { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" },
    { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" },
    { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" },
    { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" },
    { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" },
    { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" },
    { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" },
    { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" },
    { code: "WY", name: "Wyoming" }
];

export function stateCodeToName(stateCode: string) {
    return US_STATES.find(state => state.code.toUpperCase() === stateCode.toUpperCase())?.name;
}

export function stateNameToCode(stateName: string) {
    return US_STATES.find(state => state.name.toUpperCase() === stateName.toUpperCase())?.code;
}

