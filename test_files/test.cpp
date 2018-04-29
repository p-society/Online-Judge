#include<bits/stdc++.h>

using namespace std;

int main()
{
  int t;
  cin>>t;
  while(t--)
  {
    string s;
    cin>>s;
    int count1 = 0;
    for (int i=0; s[i]; i++)
      if (s[i] == '1')
        ++count1;
    if (count1 == 1 || count1 == s.length()-1)
      cout<<"Yes\n";
    else
      cout<<"No\n";
  }
  return 0;
}
