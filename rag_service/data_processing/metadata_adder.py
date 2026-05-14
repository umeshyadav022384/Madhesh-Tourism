class MetadataAdder:

    def add_metadata(self, data):
        """
        Add metadata to each item
        """

        processed_data = []

        for item in data:

            item["metadata"] = {
                "category": self.detect_category(item),
                "district": item.get("district", "unknown"),
                "source_file": item.get("source_file", "unknown")
            }

            processed_data.append(item)

        return processed_data

    def detect_category(self, item):
        """
        Detect category from source file
        """

        source = item.get("source_file", "").lower()

        if "hotel" in source:
            return "hotel"

        if "temple" in source:
            return "temple"

        if "restaurant" in source:
            return "restaurant"

        if "faq" in source:
            return "faq"

        if "tip" in source:
            return "tip"

        return "general"