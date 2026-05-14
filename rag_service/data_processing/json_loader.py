import json
import os
class JSONLoader:
    def __init__(self, data_folder):
        self.data_folder = data_folder

    def load_json_file(self, filename):
        file_path = os.path.join(self.data_folder, filename)

        with open(file_path, "r", encoding="utf-8") as file:
            return json.load(file)

    def load_all_files(self):

        all_data = []

        json_files = [
            "faqs.json",
            "hotels.json",
            "restaurants.json",
            "temples.json",
            "travel_tips.json"
        ]

        for file_name in json_files:

            try:
                data = self.load_json_file(file_name)

                # ---------------------------
                # CASE 1: FAQ type data
                # ---------------------------
                if file_name == "faqs.json":

                    for category, items in data.items():

                        for item in items:

                            item["category"] = category
                            item["district"] = "siraha"
                            item["source_file"] = file_name

                            all_data.append(item)

                # ---------------------------
                # CASE 2: Hotel / Temple / Restaurant
                # ---------------------------
                elif file_name in ["hotels.json", "temples.json", "restaurants.json"]:

                    for district, items in data.items():

                        for item in items:

                            item["district"] = district
                            item["source_file"] = file_name

                            all_data.append(item)

                # ---------------------------
                # CASE 3: Travel Tips
                # ---------------------------
                elif file_name == "travel_tips.json":

                    for item in data["tips"]:

                        item["district"] = "siraha"
                        item["source_file"] = file_name

                        all_data.append(item)

                print(f"Loaded: {file_name}")

            except Exception as e:
                print(f"Error loading {file_name}: {e}")

        return all_data