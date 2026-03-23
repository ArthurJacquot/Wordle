import json
import unicodedata

def normalize_word(word):
    # Normalize unicode to decomposed form
    nfkd_form = unicodedata.normalize('NFKD', word)
    # Filter out non-spacing marks (accents) and convert to lowercase
    normalized = "".join([c for c in nfkd_form if not unicodedata.combining(c)])
    return normalized.lower()

files = [
    # "./Adjectifs, féminin singulier (simplifié).json",
    # "./Adjectifs, masculin singulier (simplifié).json",
    # "./Adverbes (simplifié).json",
    # "./Noms communs, féminin singulier (simplifié).json",
    # "./Noms communs, masculin singulier (simplifié).json",
    # "./Verbes, infinitifs.json"
    "./motsformattes.json"
]

all_words = set()

for file_name in files:
    try:
        with open(file_name, 'r', encoding='utf-8') as f:
            data = json.load(f)
            if isinstance(data, list):
                for word in data:
                    # Filter: < 10 chars, no space, no hyphen
                    if len(word) < 10 and len(word) > 3 and ' ' not in word and '-' not in word:
                        all_words.add(normalize_word(word))
    except FileNotFoundError:
        continue

# Sort the final list
final_list = sorted(list(all_words))

with open("./motsformattes.json","w") as f:
    json.dump(final_list,f)
# with open("./motsformattes.json","r") as f:
#     data = json.load(f)
#     print(len(data))