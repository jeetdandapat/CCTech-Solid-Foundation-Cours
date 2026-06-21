#include <iostream>
#include <string>

/*
SRP is used in this code.

DataReader only gets data.
ReportFormatter only makes the report.
ConsolePrinter only shows the report.
EmailNotifier only sends mail.

No design pattern is used.
*/

class DataReader
{
public:
    std::string getData()
    {
        std::cout << "Getting data...\n";
        return "Sales 5000";
    }
};

class ReportFormatter
{
public:
    std::string makeFormat(const std::string& data)
    {
        std::cout << "Making report...\n";
        return "Report: " + data;
    }
};

class ConsolePrinter
{
public:
    void showReport(const std::string& report)
    {
        std::cout << report << "\n";
    }
};

class EmailNotifier
{
public:
    void sendMail(const std::string& report)
    {
        std::cout << "Mail sent: " << report << "\n";
    }
};

int main()
{
    DataReader reader;
    ReportFormatter formatter;
    ConsolePrinter printer;
    EmailNotifier mail;

    std::string data = reader.getData();
    std::string report = formatter.makeFormat(data);

    printer.showReport(report);
    mail.sendMail(report);

    return 0;
}