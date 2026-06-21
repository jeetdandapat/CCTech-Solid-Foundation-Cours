#include <iostream>
#include <string>

class Report
{
public:
    void makeReport()
    {
        std::string data = getData();
        std::string report = makeFormat(data);

        showReport(report);
        sendMail(report);
    }

private:
    std::string getData()
    {
        std::cout << "Getting data...\n";
        return "Sales 5000";
    }

    std::string makeFormat(const std::string& data)
    {
        std::cout << "Making report...\n";
        return "Report: " + data;
    }

    void showReport(const std::string& report)
    {
        std::cout << report << "\n";
    }

    void sendMail(const std::string& report)
    {
        std::cout << "Mail sent: " << report << "\n";
    }
};

int main()
{
    Report report;
    report.makeReport();

    return 0;
}