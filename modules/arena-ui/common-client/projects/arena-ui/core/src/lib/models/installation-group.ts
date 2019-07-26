export class InstallationGroup {
  public name: string;
  public properties: Map<string, string>;
  public subGroups?: Map<string, InstallationGroup>;

  constructor(name: string, properties: Map<string, string>, subGroups: Map<string, InstallationGroup>) {
    this.name = name;
    this.properties = properties;
    this.subGroups = subGroups;
  }
}
