class DataCleaner:

    def clean_text(self, text):
        """
        Clean extra spaces from text
        """

        if not isinstance(text, str):
            return text

        return " ".join(text.strip().split())

    def clean_item(self, item):
        """
        Clean one JSON object
        """

        cleaned_item = {}

        for key, value in item.items():

            # text field
            if isinstance(value, str):
                cleaned_item[key] = self.clean_text(value)

            # list field
            elif isinstance(value, list):
                cleaned_list = []

                for v in value:
                    if isinstance(v, str):
                        v = self.clean_text(v)
                        if v != "":
                            cleaned_list.append(v)
                    else:
                        cleaned_list.append(v)

                cleaned_item[key] = cleaned_list

            # other types
            else:
                cleaned_item[key] = value

        return cleaned_item

    def remove_empty_items(self, data):
        """
        Remove completely empty records
        """

        cleaned_data = []

        for item in data:

            has_data = False

            for value in item.values():

                if isinstance(value, str) and value.strip():
                    has_data = True
                    break

                if isinstance(value, list) and len(value) > 0:
                    has_data = True
                    break

            if has_data:
                cleaned_data.append(item)

        return cleaned_data

    def remove_duplicates(self, data):
        """
        Remove duplicate items
        """

        seen = set()
        unique_data = []

        for item in data:

            key = str(sorted(item.items()))

            if key not in seen:
                seen.add(key)
                unique_data.append(item)

        return unique_data

    def clean_dataset(self, data):
        """
        Full cleaning pipeline
        """

        # step 1: clean each item
        cleaned = []
        for item in data:
            cleaned.append(self.clean_item(item))

        # step 2: remove empty items
        cleaned = self.remove_empty_items(cleaned)

        # step 3: remove duplicates
        cleaned = self.remove_duplicates(cleaned)

        return cleaned